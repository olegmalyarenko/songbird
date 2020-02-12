import React, { Component } from 'react';
import birdsData from '../../data/birdsData.js';
import './AnswerList.scss';
console.log(birdsData);


  
const AnswerList = ({ titles, sayHi }) => {
// 

  const elements = titles.map((el) => {
    return (
      <li 
        className="answer-item"  //  
        key={el.id} 
        onClick = {sayHi}
        data-value = {el.name} > 
         <span className="chBox"></span>
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