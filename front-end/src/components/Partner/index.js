import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BuyId from '../BuyId';
import PartnerClients from '../PartnerClients';
import Profile from '../Profile';
import './styles.css';

const Partner = ({ PartnerInfo }) => {
  const [infos, setInfostoshow] = useState(BuyId(PartnerInfo));
  return (
    <React.Fragment>
      <div className="head b-shadow">
        <img
          className="perfil-picture"
          src={PartnerInfo.profilePicture} alt={`foto de ${PartnerInfo.name}`}
        />
        <span className="subtitle">{`${PartnerInfo.name}`}</span>
      </div>
      {infos}
      <footer>
        <button className="f-btn" onClick={() => setInfostoshow(BuyId(PartnerInfo))}>ID de compra</button>
        <button className="f-btn" onClick={() => setInfostoshow(<PartnerClients />)}>Clientes</button>
        <button className="f-btn"><Link to="/StoresMap">Lojas Parceiras</Link></button>
        <button className="f-btn" onClick={() => setInfostoshow(Profile(PartnerInfo))}>Perfil</button>
      </footer>
    </React.Fragment>
  )
};

export default Partner;
