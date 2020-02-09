import React, { Component } from 'react';
import './Song.scss';


export default class Song extends Component {

  render() {
    const { src } = this.props;
    console.log(src);
    return (
        
        <div className="audioplayer">
            <audio src={src} controls></audio>
        </div>
        
    )
  }
}