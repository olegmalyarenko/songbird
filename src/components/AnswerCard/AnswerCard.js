import React from 'react';
import Description from '../Bird/Description/Description';
import Title from '../Bird/Title';
import Sub from '../Bird/Sub/Sub';
import Image from '../Bird/Image';
import Song from '../Bird/Song';
import birdsData from '../../data/birdsData.js';
import './AnswerCard.scss';

const AnswerCard = ({ section, selectedID, selected}) => {
  console.log(section);
  console.log(selectedID);
  console.log(selected);
  const src = birdsData[section][selectedID].image;
  const title = birdsData[section][selectedID].name;
  const song = birdsData[section][selectedID].audio;
  const species = birdsData[section][selectedID].species;
  const text = birdsData[section][selectedID].description;
  const style = {
    display: selected ? 'none' : 'block',
  };

  const defaultCard = (
    <div 
    className= "answer-card"
    style={style}
    > 
    
    <span>Послушайте плеер.</span>
    <span>Выберите птиц из списка.</span>
    
    </div>
  );

  const elem = ( 
    <>
      <div className="answer-card">
        <div className="answer-header">
        <Image src={src} />
        
          <div className="answer-info">
            <Title title={title} />
            <Sub species={species} />
            <Song song={song} /> 
          </div>
        </div>
        <div className="answer-description">
          <Description text={text} />
        </div>
      </div>
    </>

  )

  return (
    
    selected ? elem : defaultCard
   
  )
};

export default AnswerCard;