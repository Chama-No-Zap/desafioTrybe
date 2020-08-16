import React from 'react';
import { Link } from 'react-router-dom';
import wpp from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const linksBtn = (clasName, link, text) => {
  return(
    <p className={clasName}>
      <Link to={`/${link}`}>{text}</Link>
    </p>
  );
};

const LandingPage = () => {
  return (
    <div>
      <h1 className="logo-name">AmbulaBev</h1>
      {linksBtn('find-drinks-btn', 'FindDrinks', 'Encontrar Bebidas')}
      <div className="infos">
        <div>{linksBtn('partner-link', 'BecomePartner', 'Seja parceiro')}</div>
        <div>
        Links úteis
        {linksBtn('sub-links', 'Devs', 'Quem somos')}
        {linksBtn('sub-links', 'Feedbacks', 'Sugestões e feedbacks')}
        </div>
        <div>
        Ajuda
        {linksBtn('sub-links', 'FindSellerHelp', 'Como encontar um vendedor?')}
        {linksBtn('sub-links', 'RequirementsHelp', 'Quais requisitos pra ser um parceiro?')}
        </div>
        <div>
        Contato</div>
        <div className="contact">
          <a rel="noopener noreferrer" target="_blank" href={`https://wa.me/973481195`}>
            <img src={wpp} alt="whatsapp icon"/>
            Entrar em contato
          </a>
        </div>
        <div>email@contato.com</div>
        
      </div>
    </div>
  )
};

export default LandingPage;
