import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import Navigate from '../Navigate';
import Partner from '../Partner';
import Authentication from '../../utils/PartnerAutentication';

const Profile = () => {
  const [PartnerInfo, setPartnerInfo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPartnerInfo(Authentication())
    }, 100)
  }, []);

  return (PartnerInfo !== null && 
    <div className='id-container'>
      {Partner(PartnerInfo)}
      <h1 className="text">Perfil</h1>
      <p>
        <div className='salesQnt'>
          <h1>{PartnerInfo.salesQnt}</h1>
        </div>
        <img className='photo' src={PartnerInfo.profilePicture} alt={PartnerInfo.name} />
          <div className='score'>
            <h1>{PartnerInfo.score}</h1>
          </div>
      </p>
      <div className='inputs-center'>
        <p>
          <span>E-mail</span>
          <input className='real-input' type='text' placeholder={PartnerInfo.email} required></input>
          <button className='btn' onClick={() => alert('email alterado com sucesso')}>Editar</button>
        </p>
        <p>
          <span>Contato</span>
          <input className='real-input' type='text' placeholder={PartnerInfo.contact}></input>
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
