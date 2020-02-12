import React, { Component } from 'react';
import './Navbar.scss';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul className="menu-nav">
          <li>Разминка</li>
          <li>Воробьиные</li>
          <li>Лесные птицы</li>
          <li>Певчие птицы</li>
          <li>Хищьные птицы</li>
          <li>Морские птицы</li>
        </ul>
      </nav>

    )
  }
}

