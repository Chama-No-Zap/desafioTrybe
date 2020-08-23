import React, { useContext } from 'react';
import partners from '../../fakeUsersdatabase';
import PartnerContext from '../../Context/PartnerContext';
import { Redirect } from 'react-router-dom';

const PartnerAutentication = () => {
  const { email, password, setPartnerInfo, partnerInfo } = useContext(PartnerContext);
  setTimeout(() =>
  setPartnerInfo(partners
    .find((el) => email === el.email && password === el.password) || false), 1000);
  
    return <div>
      {partnerInfo === '' && <div>carregando...</div>}
      {partnerInfo === false && window.location.assign('/becomePartner')}
      {typeof partnerInfo === 'object' && <Redirect to={`/${partnerInfo.id}/buyId`} />}
    </div>
}

export default PartnerAutentication;