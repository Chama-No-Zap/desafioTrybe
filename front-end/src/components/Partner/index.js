import React, { useState, useEffect } from 'react';
import BuyId from '../BuyId';
import './styles.css'

const Partner = ({ PartnerInfo }) => {
  useEffect(() => {
  }, [PartnerInfo.productsAvaliable]);

  return (
    <React.Fragment>
      <div className="heading b-shadow ">
        <img
          className="perfil-picture"
          src={PartnerInfo.profilePicture} alt={`foto de ${PartnerInfo.name}`}
        />
        <span className="subtitle">{`${PartnerInfo.name}`}</span>
      </div>
      {BuyId(PartnerInfo)}
    </React.Fragment>
  )
};

export default Partner;
