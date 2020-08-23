 
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PartnerContext from './PartnerContext';

const PartnerProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [partnerInfo, setPartnerInfo] = useState('');
  const [prodSelected, setProdSelected] = useState("ID de compra");

  const context = {
    email,
    password,
    partnerInfo,
    prodSelected,
    setEmail,
    setPassword,
    setPartnerInfo,
    setProdSelected
  };

  return <PartnerContext.Provider value={context}>{children}</PartnerContext.Provider>;
};

export default PartnerProvider;

PartnerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};