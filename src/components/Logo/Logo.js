import React, { Component } from 'react';
import LogoImage from '../../assets/birdlogo.svg'
import  './Logo.scss';

export default class Logo extends Component { 
    render() {
       return (
         <div className="logo"><img src={LogoImage} alt='Birdlogo' height="40" widht="100"></img></div>
        )
     }    
}