import React, { useState, useEffect } from 'react';
import qr from '../../assets/images/A_Minha_Galeria.png';

import Authentication from '../../utils/PartnerAutentication';
import './styles.css';
import Partner from '../Partner';
import Navigate from '../Navigate';

const BuyId = () => {
  const [PartnerInfo, setPartnerInfo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPartnerInfo(Authentication())
    }, 100)
  }, []);

  return (PartnerInfo !== null && 
    <div className="id-page">
      {Partner(PartnerInfo)}
      <div className="id-container">
      <h2>ID DE COMPRAS</h2>
        <div className="circle">
          <h1>{PartnerInfo.buyId}</h1>
        </div>
      </div>
      <img className='qrCode' src={qr} alt='qr-code' />
      <Navigate />
    </div>
  )
};

export default BuyId;
