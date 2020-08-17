import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BuyId from '../BuyId';
import PartnerClients from '../PartnerClients';
import './styles.css';
import Profile from '../Profile';

const Partner = ({ PartnerInfo }) => {
  const [infos, setInfostoshow] = useState(BuyId(PartnerInfo));
  return (
    <React.Fragment>
      <div className="heading b-shadow">
        <img
          className="perfil-picture"
          src={PartnerInfo.profilePicture} alt={`foto de ${PartnerInfo.name}`}
        />
        <span className="subtitle">{`${PartnerInfo.name}`}</span>
      </div>
      {infos}
      <footer>
        <button onClick={() => setInfostoshow(BuyId(PartnerInfo))}>ID de compra</button>
        <button onClick={() => setInfostoshow(<PartnerClients />)}>Clientes</button>
        <button><Link to="/StoresMap">Lojas Parceiras</Link></button>
        <button onClick={() => setInfostoshow(Profile(PartnerInfo))}>Perfil</button>
      </footer>
    </React.Fragment>
  )
};

export default Partner;
