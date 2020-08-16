import React from 'react';
import qr from '../../assets/images/A_Minha_Galeria.png';

import './styles.css'

const BuyId = ({buyId}) => {
  return (
    <div>
      id de compra
      <h1>{buyId}</h1>
      <img className='qrCode' src={qr} alt='qr-code' />
    </div>
  )
};

export default BuyId;
