import React, { useState, useEffect } from 'react';
import BuyId from '../BuyId';
import PartnerClients from '../PartnerClients';
import PartnerStore from '../PartnerStores';
import Profile from '../Profile';

const checkbox = (produto, arr) => {
  return(
    <div>
      <input type="checkbox" onChange={() => arr(produto)} id={produto} />
      <label htmlFor={produto}>{produto}</label>
    </div>
  );
};

const Header = ({ PartnerInfo }) => {
  const [infos, setInfostoshow] = useState(BuyId(PartnerInfo));
  const [arr, setArr] = useState([]);

  const [agua, setAgua] = useState(PartnerInfo.productsAvaliable.map((el) => el === "Àgua" ? true : false));
  const [refri, setRefri] = useState(false);
  const [suco, setSuco] = useState(false);

  useEffect(() => {
    console.log(PartnerInfo.productsAvaliable)
    console.log(agua)
  }, [arr]);

  return (
    <div>
      <span>
        {infos}
      </span>
      <footer>
        <button onClick={() => setInfostoshow(BuyId(PartnerInfo))}>ID de compra</button>
        <button onClick={() => setInfostoshow(<PartnerClients />)}>Clientes</button>
        <button onClick={() => setInfostoshow(<PartnerStore />)}>Lojas Parceiras</button>
        <button onClick={() => setInfostoshow(Profile(PartnerInfo))}>Perfil</button>
      </footer>
    </div>
  )
};

export default Header;
