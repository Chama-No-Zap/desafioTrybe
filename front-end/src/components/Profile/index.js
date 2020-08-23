import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import Navigate from '../Navigate';
import Partner from '../Partner';
import PartnerContext from '../../Context/PartnerContext';

const Profile = () => { 
  const { partnerInfo } = useContext(PartnerContext);

  return (partnerInfo !== null && 
    <div className='id-container'>
      {Partner(partnerInfo)}
      <h1 className="text">Perfil</h1>
      <p>
        <div className='salesQnt'>
          <h1>{partnerInfo.salesQnt}</h1>
        </div>
        <img className='photo' src={partnerInfo.profilePicture} alt={partnerInfo.name} />
          <div className='score'>
            <h1>{partnerInfo.score}</h1>
          </div>
      </p>
      <div className='inputs-center'>
        <p>
          <span>E-mail</span>
          <input className='real-input' type='text' placeholder={partnerInfo.email} required></input>
          <button className='btn' onClick={() => alert('email alterado com sucesso')}>Editar</button>
        </p>
        <p>
          <span>Contato</span>
          <input className='real-input' type='text' placeholder={partnerInfo.contact}></input>
          <button className='btn' onClick={() => alert('Contato alterado com sucesso')}>Editar</button>
        </p>
      </div>
      <button className='btn' type="button"><Link to="/StoresMap">Comprar produtos</Link></button>
      <button className='btn' type="button" to="/linkd-do-mapa-de-lugares">Adicionar produtos</button>
      <Navigate />
    </div>
  )
};

export default Profile;
