import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from '../features/Menu';
import Header from '../features/Header';
import Home from '../features/Home';
import Login from '../features/Login';
import Chat from '../features/Chat';
import Matches from '../features/Matches';
import Profile from '../features/Profile';

import './app.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Menu />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/matches" exact component={Matches} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/profile" exact component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
