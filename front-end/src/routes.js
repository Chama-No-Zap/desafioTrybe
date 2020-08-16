import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Partner from './pages/Partner';
import UserMap from './pages/UserMap';

const Routes = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/FindDrinks" component={LandingPage} />
      <Route path="/BecomePartner" component={Login} />
      <Route path="/Devs" component={LandingPage} />
      <Route path="/Feedbacks" component={LandingPage} />
      <Route path="/FindSellerHelp" component={LandingPage} />
      <Route path="/RequirementsHelp" component={LandingPage} />
      <Route path="/map" component={UserMap} />
      <Route path="/:id" component={Partner} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  );
};

export default Routes;
