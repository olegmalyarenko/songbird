import React from 'react';
import Description from '../Bird/Description/Description';
import Title from '../Bird/Title';
import Sub from '../Bird/Sub/Sub';
import Image from '../Bird/Image';
import './AnswerCard.scss';

const AnswerCard = ({ text, title, src, species }) => {
  return (
    <>
      <div className="answer-card">
        <div className="answer-header">
        <Image src={src} />
        
          <div className="answer-info">
            <Title title={title} />
            <Sub species={species} />
          </div>
        </div>
        <div className="answer-description">
          <Description text={text} />
        </div>
      </div>
    </>
  )
};

export default AnswerCard;