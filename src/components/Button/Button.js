import React, { Component } from 'react';

import  './Button.scss';

const Button = ({ action, label }) => { 
   return (
      <button className="button"
      onClick = {action}
   >{label}</button>
      )
}

export default Button;


