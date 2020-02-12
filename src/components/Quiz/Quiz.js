import React from 'react';
import Image from '../Bird/Image';
import Song from '../Bird/Song';
import Title from '../Bird/Title';
import './Quiz.scss';


const Quiz = ({ image, song, title }) => {
  return (
    <div className="quiz">
      <Image src={image} />
      <div className="bird-info">
        <Title title={title} />
        <Song src={song} />
      </div>
    </div>
  )
};

export default Quiz;