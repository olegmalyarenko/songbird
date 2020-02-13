import React, { Component } from 'react';
import './App.scss';
import Logo from '../Logo';
import Navbar from '../Navbar';
import AnswerList from '../AnswerList';
import Score from '../Score';
import Quiz from '../Quiz';
import Button from '../Button';
import AnswerCard from '../AnswerCard';


export default class App extends Component {

  state = {
    section: 0,
    randomID: 0,
    selectedID: 0,
    selected: false,
    score: 0,
    attempt: 0,
    win: false,
    id: 0,
    
  }
  componentDidMount() {
    
    this.setState({
      randomID: this.randomChoice()
    });
  }

  randomChoice() {
    return Math.floor((Math.random() * 6));
    
  }
  
selectAnswer = (id, e) => {
  //e.persist();
  this.setState( {
    selectedID: id - 1,
    selected: true,
  });

  if (!e.target.classList.contains('true') && !e.target.classList.contains('false')) {
    this.setState( (state) => ({
      attempt: state.attempt +1
  }));
}
  this.checkAnswer(id);
  this.styleAnswer(e);
}

checkAnswer = (id) => {
  if (id - 1 != this.state.randomID || this.state.win) return;
  this.setState ( (state) => ({
    win: true,
    score: state.score + 5 - this.state.attempt,
  }))
  
};

styleAnswer = (e) => {
    if (e._targetInst.key - 1 === this.state.randomID && !this.state.win){
    e.target.children[0].classList.add('true');
    document.querySelector('button').classList.add('active-button');
    
  } else if (e._targetInst.key - 1 != this.state.randomID && !this.state.win ){
  e.target.children[0].classList.add('false');
  }
}

upLevel = (e) => { 
  
  if (e.target.classList.contains('active-button')) {
    document.querySelector('active').classList.remove('active');

  }
}
  

  render() {
    return (
      <>
        <header className='header'>
        <Logo />
        <Score score={this.state.score}/>
        </header>

        <main>
          <Navbar />
          <Quiz
            section={this.state.section}
            win={this.state.win}
            randomID={this.state.randomID}
          />
          <div className="answer-block">
          <AnswerList 
            section={this.state.section} 
              selectAnswer={this.selectAnswer}
          />
          <AnswerCard
            section={this.state.section} 
            selected={this.state.selected}
            selectedID={this.state.selectedID} 
          />
          </div>
          <Button upLevel={this.upLevel} />
        </main>
      </>
    );
  }

};  
