import React, { Component } from 'react';
import './Score.scss'


export default class Score extends Component {
  render() {
    return (
          <h2 className="score">
            Score:
            <span className="current-score">10</span>
          </h2>
    )
  }
}
