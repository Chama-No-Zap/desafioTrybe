import React, { useState, useEffect } from 'react'
import Partners from '../../fakeUsersdatabase/Partners';
import Header from '../../components/Header';

const Partner = () => {
  const [partner, setPartner] = useState(null);
  
  useEffect(() => {
    setPartner(Partners.find((el) => Number(window.location.pathname.split('/')[1]) === el.id));
  }, []);
  
  return (
    partner !== null && partner !== undefined &&
    <div>
      <Header PartnerInfo={partner} />
    </div>
  )
}

export default Partner;
