import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <div className="header--wrapper">
      <h1 className="header--title">Essential Dating</h1>
      <div className="header--toggle-wrapper">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
          <p className="switch-text">Swipe</p>
        </label>
      </div>
    </div>
  )
}

export default Header;