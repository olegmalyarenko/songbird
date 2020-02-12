import React, { Component } from 'react';
import './App.scss';
import Logo from '../Logo';
import Navbar from '../Navbar';
import AnswerList from '../AnswerList';
import Score from '../Score';
import Quiz from '../Quiz';
import birdsData from '../../data/birdsData.js';
import AnswerCard from '../AnswerCard';


export default class App extends Component {

  state = {
    image: null,
    species: null,
    audio: null,
    birds: birdsData[0],
    answer: null,
    name: null,
    description: null,
    check: null, 
    birdDetails: {
      image: null,
      species: 'Послушайте плеер.Выберите птицу из списка',
      audio: null,
      description: null,
    }
  }
  componentDidMount() {
    this.randomChoice();
    this.setState({
      name: '*******',
      species: null,
      description: null,
      image: 'https://whatsism.com/templates/whatsapp/images/question.svg',
    })
  }

  randomChoice() {
    const index = Math.floor((Math.random() * 5));
    const el = this.state.birds[index].species;
    console.log(el);
    this.setState({
      image: this.state.birds[index].image,
      audio: this.state.birds[index].audio,
      species: this.state.birds[index].species,
      name: this.state.birds[index].name,
      check: this.state.birds[index].name,
      description: this.state.birds[index].description,
    })
  }
  check = this.state.check;

  
  sayHi(e,check) {
    console.log(e.target.dataset.value);
    console.log(check);
    
    /*if (e.target.dataset.value === this.state.check){
      console.log(true);
    } else {
      console.log(false);
    }*/
  }

  

  render() {
    return (
      <>
        <header className='header'>
        <Logo />
        <Score />
        </header>

        <main>
          <Navbar />
          <Quiz
            title={this.state.name}
            song={this.state.audio}
            image={this.state.image}
          />
          <div className="answer-block">
          <AnswerList 
          titles={this.state.birds} 
          sayHi={this.sayHi} 
          />
          <AnswerCard
            title={this.state.birdDetails.name}
            src={this.state.birdDetails.image}
            species={this.state.birdDetails.species}
            text={this.state.birdDetails.description}
          />
          </div>
          <button className="button level">Next level</button>
        </main>
      </>
    );
  }
}



