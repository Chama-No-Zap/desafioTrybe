import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Partner from './pages/PartnerAuthentication';
import PaymentPages from './pages/Payment';

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
      <Route path="/Payment" component={PaymentPages} />
      <Route path="/:id" component={Partner} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  );
};

export default Routes;
