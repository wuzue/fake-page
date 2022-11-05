import React, { useState } from 'react'
import './DynamicCards.css'
import dynamicZero from '../assets/imgs/imgone.jpg'
import dynamicOne from '../assets/imgs/dinamicone.png'
import dynamicTwo from '../assets/imgs/dinamictwo.jpg'

const data = [
  {
    id: '1',
    key: '1',
    title: 'Liberdade Geográfica',
    text: 'Para você poder viajar para qualquer lugar do mundo.',
    img: dynamicZero
  },
  {
    id: '2',
    key: '2',
    title: 'Liberdade Financeira',
    text: 'Sustente você e sua familía sem se preocupar com a fatura.',
    img: dynamicOne
  },
  {
    id: '3',
    key: '3',
    title: 'Liberdade de Tempo',
    text: 'Para não ser escravo da rotina e fazer o que quiser e quando quiser.',
    img: dynamicTwo
  }
]; 

const DynamicCards = () => {
  const [toggle, setToggle] = useState('1');
  return (
    <div className="d-cards">
      {data.map(({ title, text, key, img }) => {
        return (
          <>
            <div className="main-d-cards">
              <div className="text-d-cards">
                <h1 onClick={() => setToggle(key)}>{title} </h1>
                {toggle === key ? (
                    <p className='texto'>{text}</p>
                ) : null}
              </div>
            </div>
            <div className="card-display">
              {toggle === key ? (
                <img src={img} key={key} className="card" />            
              ) : null}
            </div>
          </>
          
        );
      })}
    </div>
     
  )
}

export default DynamicCards