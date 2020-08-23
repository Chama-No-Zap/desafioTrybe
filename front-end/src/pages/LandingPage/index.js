import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const linksBtn = (className, link, text) => {
  return (
    <div className={className}>
      <Link to={`/${link}`}>{text}</Link>
    </div>
  );
};

const contact = () => (
  <Fragment>
    <div>Contato</div>
    <div className="contact">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://wa.me/973481195`}
      >
        (31) 97348-1195
      </a>
    </div>
    <div className="sub-links">
      <a href="mailto:email@contato.com">email@contato.com</a>
    </div>
  </Fragment>
);

const LandingPage = () => {
  return (
    <div>
      <h1 className="logo-name">AMBULABEV</h1>
      {linksBtn("find-drinks-btn", "map", "Encontrar Bebidas")}
      <div className="infos">
        <div>{linksBtn("partner-link", "1/buyId", "Seja parceiro")}</div>
        <div>
          Links úteis
          {linksBtn("sub-links", "Devs", "Quem somos")}
          {linksBtn("sub-links", "Feedbacks", "Sugestões e feedbacks")}
        </div>
        <div>
          Ajuda
          {linksBtn(
            "sub-links",
            "FindSellerHelp",
            "Como encontar um vendedor?"
          )}
          {linksBtn(
            "sub-links",
            "RequirementsHelp",
            "Quais requisitos pra ser um parceiro?"
          )}
        </div>
        {contact()}
      </div>
    </div>
  );
};

export default LandingPage;
