import React, { useState, useEffect } from 'react';
import './styles.css';
import Partner from '../Partner';
import Navigate from '../Navigate';
import Authentication from '../../utils/PartnerAutentication';

const persons = [
  {
    id: 1,
    name: 'Breno',
    distance: '100m',
    showProducts: ["Àgua ", "Refri ", "Suco"]
  },
  {
    id: 2,
    name:'Lucas',
    distance: '100m',
    showProducts: ["Àgua ", "Refri ", "Suco"]
  },
  {
    id: 3,
    name:'Diego',
    distance: '100m',
    showProducts: ["Suco"]
  },
  {
    id: 4,
    name:'Henrique',
    distance: '100m',
    showProducts: ["Àgua ", "Suco"]
  },
  {
    id: 5,
    name:'Henrique',
    distance: '100m',
    showProducts: ["Àgua"]
  }
];

const PartnerClients = () => {
  const [ProductSellected, setProductSellected] = useState({});
  const [PartnerInfo, setPartnerInfo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPartnerInfo(Authentication())
    }, 100)
  }, []);

  return (PartnerInfo !== null && 
    <div>
    {Partner(PartnerInfo)}
      {persons.map((el) => {
        return (
          <div onClick={() => setProductSellected(el.id === ProductSellected.id ? {} : el)} className='client-container'>
            <h1>{el.name}</h1>
            {
              el.id === ProductSellected.id 
              ?
                <span className='client-container'>{el.showProducts.map((eli) => eli)}</span>
              :
                null
            }
          </div>);
      })}
      <Navigate />
    </div>
  )
};

export default PartnerClients;
