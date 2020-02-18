import React from 'react';
import './styles.scss';
import MatchSwipe from './MatchSwipe';
import MatchList from './MatchList';

const Home = () => {
  return (
    <div id="page-wrap" className="home--wrapper">
      <MatchSwipe />
      {/* <MatchList /> */}
    </div>
  );
};

export default Home;