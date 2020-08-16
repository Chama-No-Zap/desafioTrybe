// import React, { useState, useEffect } from 'react';
// import BuyId from '../BuyId';
// import PartnerClients from '../PartnerClients';
// import PartnerStore from '../PartnerStores';

// const checkbox = (produto, arr) => {
//   return(
//     <div>
//       <input type="checkbox" onChange={() => arr(produto)} id={produto} />
//       <label htmlFor={produto}>{produto}</label>
//     </div>
//   );
// };

// const Header = ({ PartnerInfo }) => {
//   const [infos, setInfostoshow] = useState(BuyId(PartnerInfo));
//   const [arr, setArr] = useState([]);

//   const [agua, setAgua] = useState(PartnerInfo.productsAvaliable.map((el) => el === "Àgua" ? true : false));
//   const [refri, setRefri] = useState(false);
//   const [suco, setSuco] = useState(false);

//   useEffect(() => {
//     console.log(PartnerInfo.productsAvaliable)
//     console.log(agua)
//   }, [PartnerInfo.productsAvaliable, agua, arr]);

//   return (
//     <div>
//       {<img src={PartnerInfo.profilePicture} alt={`foto de ${PartnerInfo.name}`} />}
//       <span>
//         {infos}
//       </span>
//         Selecione o(s) iten(s) que vocẽ tem disponível(eis):
//         {checkbox('Àgua', setArr)}
//         {checkbox('Refrigerante', setArr)}
//         {checkbox('Suco', setArr)}
//       <footer>
//         <button onClick={() => setInfostoshow(BuyId(PartnerInfo))}>ID de compra</button>
//         <button onClick={() => setInfostoshow(<PartnerClients />)}>Clientes</button>
//         <button onClick={() => setInfostoshow(<PartnerStore />)}>Lojas Parceiras</button>
//       </footer>
//     </div>
//   )
// };

// export default Header;
