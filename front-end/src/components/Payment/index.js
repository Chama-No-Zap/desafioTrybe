import React from 'react';
import './styles.css';

const Payment = () => {
  return (
    <div className="container-payment" >
      <div className="header-payment">
        <img
          width="50px"
          src="https://3.bp.blogspot.com/--U3VZcvh954/WMloM41_fBI/AAAAAAAAJKs/PMTN6allydIWwWZTrFXf_5r_7UdqfO-cACLcB/s1600/checked_user1600.png"
          alt="Foto usuário"
          className="user"
        />
        <h2>PAGAMENTO</h2>
      </div>
      <div className="info-payment">
        <img
          width="150px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
          alt="Logo Cartão"
          className="logo-card"
        />
        <p>LETÍCIA SANTOS</p>
        <p>XXXX XXXX XXXX 8542</p>
        <p>VAL 04/25  CVC 549</p>
      </div>
      <div className="request-information">
        <h2><strong>PEDIDO: 2x ÁGUA MINERAL AMA</strong></h2>
        <h3>TOTAL: R$ 4,00</h3>
        <button
          type="button"
          onClick={() => alert('Compra realizada com sucesso!')}
        >
          PAGAR
        </button>
      </div>
    </div>
  )
}

export default Payment; 
