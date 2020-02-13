import React, { Component } from 'react';
import './Song.scss';

const Song = ({ song
}) => {
  return (
    <div className="audioplayer">
      <audio src={song} controls></audio>
    </div>
  );
};

export default Song;

