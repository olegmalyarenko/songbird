import React, {Component} from 'react';
import './App.scss';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Score from '../Score';
import Image from '../Bird/Image';
import Song from '../Bird/Song';
import GetBird from '../../servises/getData';

export default class App extends Component {
  
  state = {
      url: null,
      subtitle: 'Parus major',
      song: null,
  }
  
  bird = new GetBird();

  constructor() {
      super();
    this.getImage();
    this.getSong();
  }

  getImage() {
    this.bird.image(this.state.subtitle)
      .then((res) => {
        this.setState({
          url: res,
        })
      })
  }

  getSong() {
    this.bird.audio(this.state.subtitle)
      .then((res) => {
        this.setState({
          song: res,
        })
      })
  }

  
  render() {
    return (
      <>
        <Score />
        <Logo />
        <main>
          <Navbar />
          <div className="quiz">
            <Image src={this.state.url} />
            <div className="bird-img"></div>
            <div className="bird-info">
              <div className="bird-title"></div>
              <Song src={this.state.song} />
            </div>
          </div>
          <ul className="answer-list">
            <li>Орел</li>
            <li>Коршун</li>
            <li>Лунь</li>
            <li>Сокол</li>
          </ul>
          <div className="answer-card">

            <div className="answer-header">
              <div className="answer-img"></div>

              <div className="answer-info">
                <h2 className="answer-title"></h2>

                <h2 className="answer-sub-title"></h2>

                <Song src={this.state.song} />
              </div>
            </div>

            <div className="answer-description">

            </div>
          </div>

          <button className="button level">Next level</button>
        </main>
      </>
    );
  }
}



