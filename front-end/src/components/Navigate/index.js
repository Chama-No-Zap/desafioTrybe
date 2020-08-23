import React, { useContext } from 'react';

import './styles.css';
import qrCode from '../../assets/images/icons/qr-code.svg';
import qrCodeClicked from '../../assets/images/icons/qr-code-clicked.svg';
import clients from '../../assets/images/icons/clients.svg';
import clientsClicked from '../../assets/images/icons/clients-clicked.svg';
import stores from '../../assets/images/icons/find-stores.svg';
import storesClicked from '../../assets/images/icons/find-stores-clicked.svg';
import profile from '../../assets/images/icons/profile.svg';
import profileClicked from '../../assets/images/icons/profile-clicked.svg';
import { Link } from 'react-router-dom';
import PartnerContext from '../../Context/PartnerContext';

const buttons = (btnClassName, text, link, img, clicked, prod, set) => 
    <Link
      onClick={() => set(text)}
      className={btnClassName}
      to={`/${link}`}
      style={{textDecoration: 'none'}}
    >
    <img src={ prod===text ? clicked : img} className='image' alt={text}/>
      <h6 className='text'>
        {text}
      </h6>
    </Link>

const Navigate = () => {
  const { prodSelected, setProdSelected } = useContext(PartnerContext);

  return (
      <footer className='footer-container'>
        {buttons("f-btn", "ID de compra", '1/buyId', qrCode, qrCodeClicked, prodSelected, setProdSelected)}
        {buttons("f-btn", "Clientes", '1/clients', clients, clientsClicked, prodSelected, setProdSelected)}
        {buttons("f-btn", "Lojas Parceiras", '1/StoresMap', stores, storesClicked, prodSelected, setProdSelected)}
        {buttons("f-btn", "Perfil", '1/profile', profile, profileClicked, prodSelected, setProdSelected)}
      </footer>
  )
};

export default Navigate;
