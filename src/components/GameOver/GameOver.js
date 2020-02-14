import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameOver.scss';
import Button from '../Button';

export default class GameOver extends Component {
  render() {
    const { gameOver, score, action } = this.props;
    let winner = '';
    if (score === 30) {
      winner = 'ВЫ ЗНАТНЫЙ ОРНИТОЛОГ! '
        + 'ВЫ НАБРАЛИ 30 баллов из 30!'
        + 'ПОПРОБУЕМ ЕЩЕ РАЗ?';
    } else if (score < 30 && score > 10) {
      winner = `ПОЗДРАВЛЯЕМ, ВЫ ВЫИГРАЛИ СО СЧЕТОМ ${score} из 30!`;
    } else if (score < 10) {
      winner = `ВАМ НЕ МЕШАЛОБЫ ПОЧИТАТЬ УЧЕБНИК БИОЛОГИИ ${score} из 30`;
    }
    const button = (
      <Button
        label="Start new game"
        action={action}
      />
    );
    //const elem = gameOver ? winner : null;
    //const btn = gameOver ? button : null;

    return (
      <div className="game-over">
        <p>{winner}</p>
        {button}
      </div>
    );
  }
}

GameOver.propTypes = {
  gameOver: PropTypes.bool,
};