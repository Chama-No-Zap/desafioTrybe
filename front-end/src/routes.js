import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Partner from './pages/PartnerAuthentication';
import PaymentPages from './pages/Payment';
import UserMap from './pages/UserMap';
import StoresMap from './pages/StoresMap';

const Routes = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/FindDrinks" component={LandingPage} />
      <Route exact path="/BecomePartner" component={Login} />
      <Route exact path="/Devs" component={LandingPage} />
      <Route exact path="/Feedbacks" component={LandingPage} />
      <Route exact path="/FindSellerHelp" component={LandingPage} />
      <Route exact path="/RequirementsHelp" component={LandingPage} />
      <Route exact path="/map" component={UserMap} />
      <Route exact path="/Payment" component={PaymentPages} />
      <Route exact path="/StoresMap" component={StoresMap} />
      <Route exact path="/:id" component={Partner} />
      <Route exact path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  );
};

export default Routes;
