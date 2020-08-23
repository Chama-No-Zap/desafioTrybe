import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

const buttons = (btnClassName, text, link) => 
  <button className={btnClassName}>
    <Link to={`/${link}`} style={{textDecoration: 'none'}}>{text}</Link>
  </button>

const Navigate = () => {
  return (
    <React.Fragment>
      <footer>
        {buttons("f-btn", "ID de compra", '1/buyId')}
        {buttons("f-btn", "Clientes", '1/clients')}
        {buttons("f-btn", "Lojas Parceiras", '1/StoresMap')}
        {buttons("f-btn", "Perfil", '1/profile')}
      </footer>
    </React.Fragment>
  )
};

export default Navigate;
