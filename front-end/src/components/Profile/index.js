import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const Profile = (props) => {
  return (
    <div className='id-container'>
      <h1 className="text">Perfil</h1>
      <p>
        <div className='salesQnt'>
          <h1>{props.salesQnt}</h1>
        </div>
        <img className='photo' src={props.profilePicture} alt={props.name} />
          <div className='score'>
            <h1>{props.score}</h1>
          </div>
      </p>
      <div className='inputs-center'>
        <p>
          <span>E-mail</span>
          <input className='real-input' type='text' placeholder={props.email} required></input>
          <button className='btn' onClick={() => alert('email alterado com sucesso')}>Editar</button>
        </p>
        <p>
          <span>Contato</span>
          <input className='real-input' type='text' placeholder={props.contact}></input>
          <button className='btn' onClick={() => alert('Contato alterado com sucesso')}>Editar</button>
        </p>
      </div>
      <button className='btn' type="button"><Link to="/StoresMap">Comprar produtos</Link></button>
      <button className='btn' type="button" to="/linkd-do-mapa-de-lugares">Adicionar produtos</button>
    </div>
  )
};

export default Profile;
