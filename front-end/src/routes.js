import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import PaymentPages from './pages/Payment';
import UserMap from './pages/UserMap';
import StoresMap from './pages/StoresMap';
import PartnerClients from './components/PartnerClients';
import BuyId from './components/BuyId';
import Profile from './components/Profile';
import PartnerAutentication from './components/PartnerAutentication';

const Routes = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/becomePartner" component={Login} />
      <Route exact path="/:id/clients" component={PartnerClients} />
      <Route exact path="/:id/buyId" component={BuyId} />
      <Route exact path="/:id/profile" component={Profile} />
      <Route exact path="/:id/StoresMap" component={StoresMap} />
      <Route exact path="/authentication" component={PartnerAutentication} />
      <Route exact path="/map" component={UserMap} />
      <Route exact path="/FindDrinks" component={LandingPage} />
      <Route exact path="/Devs" component={LandingPage} />
      <Route exact path="/Feedbacks" component={LandingPage} />
      <Route exact path="/FindSellerHelp" component={LandingPage} />
      <Route exact path="/RequirementsHelp" component={LandingPage} />
      <Route exact path="/Payment" component={PaymentPages} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  );
};

export default Routes;
