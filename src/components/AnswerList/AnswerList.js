import React from 'react';
import birdsData from '../../data/birdsData.js';
import './AnswerList.scss';
console.log(birdsData);


const AnswerList = ({ section, selectAnswer }) => {
 
console.log(birdsData[section]);
  const elements = birdsData[section].map((el) => {
    return (
      <li 
        className="answer-item"  //  
        key={el.id} 
        onClick = {(e) => selectAnswer(el.id, e)}
        data-value = {el.name} > 
         <span className="chBox"/>
        {el.name}
      </li>
    )
  });

  return (
    <ul className="answer-list">
      {elements}
    </ul>
  )
};

export default AnswerList;