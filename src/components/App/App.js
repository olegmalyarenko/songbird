import React, { Component } from 'react';
import './App.scss';
import Logo from '../Logo';
import Navbar from '../Navbar';
import AnswerList from '../AnswerList';
import Score from '../Score';
import Quiz from '../Quiz';
import Button from '../Button';
import GameOver from '../GameOver';
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
    gameOver: false,
    
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
    const button = document.querySelector('.button');
    button.classList.add('active-button');
    
  } else if (e._targetInst.key - 1 != this.state.randomID && !this.state.win ){
  e.target.children[0].classList.add('false');
  }
}

upLevel = () => {
  if (!this.state.win) return true;
  if (this.state.section === 5) {
    this.setState({
      section: -1,
      gameOver: true,
      win: false
    });
    this.gameOver();
  }
  this.setState((state) => ({
    attempt: 0,
    section: state.section + 1,
    win: false,
    selected: false,
    randomID: this.randomChoice(),
    selectedID: 0
  }));
  this.upLevelStyle();
};

upLevelStyle = () => { 
  
  if (document.querySelector('.button').classList.contains('active-button')) {
    const answers = document.querySelectorAll('.chBox');
    answers.forEach((el) => {
      el.className = 'chBox';
      
    });
    const button = document.querySelector('.button');
    button.classList.remove('active-button');
  }
}

  newGame = () => {
  const content = document.querySelector('.content');
  const winner = document.querySelector('.game-over');
  content.style.display = 'block';
  winner.style.display = 'none';
  this.setState({
    score: 0,
    gameOver: false,
  })

};

gameOver = () => {
  const content = document.querySelector('.content');
  content.style.display = 'none';
  const gameOverBlock = document.querySelector('.game-over');
  gameOverBlock.style.display = 'block';
}; 

  render() {
    
    return (
      <>
        <header className='header'>
        <Logo />
        <Score score={this.state.score}/>
        </header>
                
        <GameOver
        gameOver={this.state.gameOver}
        score={this.state.score}
        action={this.newGame}/>
        
        <main className="content">
          <Navbar section={this.state.section} 
          />
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
          <Button 
          label="Next level"
          action={this.upLevel} />
        </main>
      </>
    );
  }

};  
