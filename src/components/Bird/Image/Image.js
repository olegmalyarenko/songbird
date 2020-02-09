import React, { Component } from 'react';
import './Image.scss';


export default class Image extends Component {

  render() {
    const { src } = this.props;
    console.log(src);
    return (
        
        <img className="bird-img" alt="bird" src={src}/> 
        
    )
  }
}
