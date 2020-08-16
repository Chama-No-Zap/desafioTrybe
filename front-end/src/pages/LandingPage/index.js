import React from 'react';
import { Link } from 'react-router-dom';
import wpp from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const linksBtn = (clasName, link, text) => {
  return(
    <div className={clasName}>
      <Link to={`/${link}`}>{text}</Link>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <h1 className="logo-name">AmbulaBev</h1>
      {linksBtn('find-drinks-btn', 'FindDrinks', 'Encontrar Bebidas')}
      <div className="infos">
        <p>{linksBtn('partner-link', 'BecomePartner', 'Seja parceiro')}</p>
        <p>
        Links úteis
        {linksBtn('sub-links', 'Devs', 'Quem somos')}
        {linksBtn('sub-links', 'Feedbacks', 'Sugestões e feedbacks')}
        </p>
        <p>
        Ajuda
        {linksBtn('sub-links', 'FindSellerHelp', 'Como encontar um vendedor?')}
        {linksBtn('sub-links', 'RequirementsHelp', 'Quais requisitos pra ser um parceiro?')}
        </p>
        <p>
        Contato
        <p className="contact">
          <a target="_blank" href={`https://wa.me/973481195`}>
            <img src={wpp} alt="whatsapp icon"/>
            Entrar em contato
          </a>
        </p>
        <p>email@contato.com</p>
        </p>
      </div>
    </div>
  )
};

export default LandingPage;
