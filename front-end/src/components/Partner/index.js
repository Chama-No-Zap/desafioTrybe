import React, { useState } from 'react';
import BuyId from '../BuyId';
import PartnerClients from '../PartnerClients';
import PartnerStores from '../PartnerStores';
import './styles.css'
import Profile from '../Profile';

const Partner = ({ PartnerInfo }) => {
  const [infos, setInfostoshow] = useState(BuyId(PartnerInfo));
  return (
    <React.Fragment>
      <div className="heading b-shadow ">
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
        <button onClick={() => setInfostoshow(<PartnerStores />)}>Lojas Parceiras</button>
        <button onClick={() => setInfostoshow(Profile(infos))}>Perfil</button>
      </footer>
    </React.Fragment>
  )
};

export default Partner;
