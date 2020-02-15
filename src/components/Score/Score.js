import React, { Component } from 'react';
import './Score.scss'


const Score = ({ score }) => {
  return (
    <h2 className="score">
      Score:
      <span className="current-score"> {score}</span>
    </h2>
  )
};

export default Score;