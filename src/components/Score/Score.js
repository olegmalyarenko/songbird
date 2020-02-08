import React, { Component } from 'react';


export default class Score extends Component {
  render() {
    return (
          <div className="score">
            Score:
            <span className="current-score">10</span>
          </div>
    )
  }
}
