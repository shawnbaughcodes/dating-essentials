import React from 'react';
import SwipeName from './SwipeName';
import SwipeImageCard from './SwipeImageCard';
import SwipeAbout from './SwipeAbout';
import '../styles.scss';

const MatchSwipe = () => {
  return (
    <div className="match-swipe-card--wrapper">
      <SwipeName />
      <SwipeImageCard />
      <SwipeAbout />
      <SwipeImageCard />
      <div className="match-swipe-card--prompt-wrapper">
        Prompt
      </div>
      <SwipeImageCard />
      <div className="match-swipe-card--prompt-wrapper">
        Prompt
      </div>
      <div className="match-swipe-card--instagram-wrapper"></div>
    </div>
  )
}

export default MatchSwipe;