import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';
import '../../assets/styles/global.css';

const header = () => (
  <div className='header-payment'>
    <img
      width='50px'
      src='https://3.bp.blogspot.com/--U3VZcvh954/WMloM41_fBI/AAAAAAAAJKs/PMTN6allydIWwWZTrFXf_5r_7UdqfO-cACLcB/s1600/checked_user1600.png'
      alt='Foto usuário'
      className='user'
    />
    <h2>
      <strong>PAGAMENTO</strong>
    </h2>
  </div>
);

const infoPayment = () => (
  <div className='info-payment'>
    <img
      width='150px'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png'
      alt='Logo Cartão'
      className='logo-card'
    />
    <p>LETÍCIA SANTOS</p>
    <p>XXXX XXXX XXXX 8542</p>
    <p>VAL 04/25 CVC 549</p>
  </div>
);

const requestInfo = (setRedirect) => (
  <div className='request-information'>
    <h2>
      <strong>
        {' '}
        * PEDIDO: 2x ÁGUA MINERAL <span>AMA</span>
      </strong>
    </h2>
    <h1>TOTAL: R$ 4,00</h1>
    <button type='button' onClick={() => setRedirect(true)}>
      <strong>PAGAR</strong>
    </button>
  </div>
);

const Payment = () => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) return <Redirect to='/1' />;
  return (
    <div className='container-payment'>
      {header()}
      {infoPayment()}
      {requestInfo(setRedirect)}
    </div>
  );
};

export default Payment;
