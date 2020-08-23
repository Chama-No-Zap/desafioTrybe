import React, { useState, useEffect } from 'react'
import Partners from '../../fakeUsersdatabase';
import Partner from '../../components/Partner';

const Authentication = () => {
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    setPartner(Partners.find((el) => Number(window.location.pathname.split('/')[1]) === el.id));
  }, []);

  return (
    partner !== null && partner !== undefined &&
    <div>
      <Partner PartnerInfo={partner} />
    </div>
  )
}

export default Authentication;
