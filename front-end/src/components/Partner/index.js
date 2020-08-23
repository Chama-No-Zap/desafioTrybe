import React from 'react';

import './styles.css';

const Partner = (PartnerInfo) => {
  return (
    <React.Fragment>
      <div className="head b-shadow">
        <img
          className="perfil-picture"
          src={PartnerInfo.profilePicture} alt={`foto de ${PartnerInfo.name}`}
        />
        <span className="subtitle">{`${PartnerInfo.name}`}</span>
      </div>
    </React.Fragment>
  )
};

export default Partner;
