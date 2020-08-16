import React, { useState, useEffect } from 'react';
import BuyId from '../BuyId';
import PartnerClients from '../PartnerClients';
import PartnerStore from '../PartnerStores';
import './styles.css'

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

  const [agua] = useState(PartnerInfo.productsAvaliable.map((el) => el === "Àgua" ? true : false));
  // const [refri, setRefri] = useState(false);
  // const [suco, setSuco] = useState(false);

  useEffect(() => {
    console.log(PartnerInfo.productsAvaliable)
    console.log(agua)
  }, [PartnerInfo.productsAvaliable, agua, arr]);

  return (
    <React.Fragment>
      <div className="heading b-shadow ">
        <img
          className="perfil-picture"
          src={PartnerInfo.profilePicture} alt={`foto de ${PartnerInfo.name}`}
        />
        <span className="subtitle">{`${PartnerInfo.name}`}</span>
      </div>
      <span>
        {infos}
        {console.log("a",infos)}
      </span>
    </React.Fragment>
  )
};

export default Header;
