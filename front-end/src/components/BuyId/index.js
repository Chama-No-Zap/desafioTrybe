import React from 'react';
import qr from '../../assets/images/A_Minha_Galeria.png';

import './styles.css'

const BuyId = ({buyId}) => {
  return (
    <div className="id-page">
      <div className="id-container">
      <h2>ID DE COMPRAS</h2>
        <div className="circle">
          <h1>{buyId}</h1>
        </div>
      </div>
      <img className='qrCode' src={qr} alt='qr-code' />
    </div>
  )
};

export default BuyId;
