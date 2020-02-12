import React from 'react';
import Image from '../Bird/Image';
import Song from '../Bird/Song';
import Title from '../Bird/Title';
import birdsData from '../../data/birdsData.js';
import defaultImage from '../../assets/birdpic.jpg'
import './Quiz.scss';


const Quiz = ({ win, section, randomID }) => {
  const alt = win ? birdsData[section][randomID].name : null;
  const src = win ? birdsData[section][randomID].image : defaultImage;
  const title = win ? birdsData[section][randomID].name : '*****';
  const song = birdsData[section][randomID].audio ? birdsData[section][randomID].audio : true;

  return (
    <div className="quiz">
      <Image src={src} alt={alt}  />
      <div className="bird-info">
        <Title title={title} />
        <Song song={song} />
      </div>
    </div>
  )
};

export default Quiz;