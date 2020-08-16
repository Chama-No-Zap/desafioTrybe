import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const Profile = (props) => {
  return (
    <div className='id-container'>
      <p>Perfil</p>
      <p>
        <div className='salesQnt'>
          <h1>{props.salesQnt}</h1>
        </div>
        <img className='photo' src={props.profilePicture} />
          <div className='score'>
            <h1>{props.score}</h1>
          </div>
      </p>
      <p>
        <span>E-mail</span>
        <input type='text' placeholder={props.email}></input>
        <button onClick={() => alert('email alterado com sucesso')}>Editar</button>
      </p>
      <p>
        <span>Contato</span>
        <input type='text' placeholder={props.contact}></input>
        <button onClick={() => alert('Contato alterado com sucesso')}>Editar</button>
      </p>
      <button type="button"><Link to="/linkd-do-mapa-de-lugares">Comprar produtos</Link></button>
      <button type="button" to="/linkd-do-mapa-de-lugares">Adicionar produtos</button>
    </div>
  )
};

export default Profile;
