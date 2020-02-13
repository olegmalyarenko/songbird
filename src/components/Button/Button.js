import React, { Component } from 'react';

import  './Button.scss';

const Button = ({ upLevel }) => { 
   return (
      <button className="button"
      onClick = {() => upLevel()}
      >Next level</button>
      )
}

export default Button;