import React from 'react';
import Description from '../Bird/Description/Description';
import Title from '../Bird/Title';
import Sub from '../Bird/Sub/Sub';
import Image from '../Bird/Image';
import birdsData from '../../data/birdsData.js';
import './AnswerCard.scss';

const AnswerCard = ({ section, selectedID, selected}) => {
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
        <Image image={birdsData[section][selectedID].image} />
        
          <div className="answer-info">
            <Title name={birdsData[section][selectedID].name} />
            <Sub species={birdsData[section][selectedID].species} />
          </div>
        </div>
        <div className="answer-description">
          <Description text={birdsData[section][selectedID].description} />
        </div>
      </div>
    </>

  )

  return (
    
    selected ? elem : defaultCard
   
  )
};

export default AnswerCard;