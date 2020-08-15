import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Routes = () => {
  return(
  <BrowserRouter>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/login" component={} />
  </BrowserRouter>
  );
};

export default Routes;
