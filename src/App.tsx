import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './features/Home';
import Login from './features/Login';
import Dating from './features/Dating';
import Matches from './features/Matches';

import './app.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dating"  component={Dating} />
        <Route path="/matches" component={Matches} />
      </BrowserRouter>
    </div>
  );
}

export default App;
