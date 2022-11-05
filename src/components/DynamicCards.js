import React, { useState } from 'react'
import './DynamicCards.css'
import dynamicZero from '../assets/imgs/imgone.jpg'
import dynamicOne from '../assets/imgs/dinamicone.png'
import dynamicTwo from '../assets/imgs/dinamictwo.jpg'
import fullHdOne from '../assets/imgs/fullhdone.png'
import fullHdTwo from '../assets/imgs/fullhdtwo.jpg'
import fullHdThree from '../assets/imgs/fullhdthree.jpg'

const data = [
  {
    id: '1',
    key: '1',
    title: 'Liberdade Geográfica',
    text: 'Para você poder viajar para qualquer lugar do mundo.',
    img: fullHdOne
  },
  {
    id: '2',
    key: '2',
    title: 'Liberdade Financeira',
    text: 'Sustente você e sua familía sem se preocupar com a fatura.',
    img: fullHdTwo
  },
  {
    id: '3',
    key: '3',
    title: 'Liberdade de Tempo',
    text: 'Para não ser escravo da rotina e fazer o que quiser e quando quiser.',
    img: fullHdThree
  }
]; 

const DynamicCards = () => {
  const [toggle, setToggle] = useState('1');
  return (
    <div className="d-cards">
      {data.map(({ title, text, key, img }) => {
        return (
          <>
          <div className="card-display">
            {toggle === key ? (
            <img src={img} key={key} className="card" />            
            ) : null}
          </div>
            <div className="main-d-cards">
              <div className="text-d-cards">
                <h1 className='title-cards' onClick={() => setToggle(key)}>{title} </h1>
                {toggle === key ? (
                    <p className='texto'>{text}</p>
                ) : null}
              </div>
            </div>
          </>
          
        );
      })}
    </div>
     
  )
}

export default DynamicCards