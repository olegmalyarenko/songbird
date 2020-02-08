import React, {Component} from 'react';
import './App.scss';
import Header from '../Header';
import Logo from '../Logo';
import Navbar from '../Navbar';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Logo />
        <main>
          <Navbar />
          <div className="quiz">
            <div className="bird-img"></div>
            <div className="bird-info">
              <div className="bird-title"></div>
              <div className="audioplayer"></div>
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

                <div className="audioplayer"></div>
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
