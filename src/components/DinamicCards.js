import React, { useState } from 'react'
import './DinamicCards.css'
import paris from '../assets/imgs/paris.png'
import moscow from '../assets/imgs/moscow.png'
import losAngeles from '../assets/imgs/losangeles.jpg'

const data = [
  {
    id: '1',
    key: '1',
    title: 'Title1',
    text: 'Text1',
    img: paris
  },
  {
    id: '2',
    key: '2',
    title: 'Title2',
    text: 'Text2',
    img: moscow
  },
  {
    id: '3',
    key: '3',
    title: 'Title3',
    text: 'Text3',
    img: losAngeles
  }
]; 

const DinamicCards = () => {
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
                  <>
                    <p>{text}</p>
                  </>
                ) : null}
              </div>

              <div className="img">
                {toggle === key ? (
                  <>
                    <img src={img} key={key} className="photo" />
                  </>
                ) : null}
              </div>
            </div>
          </>
        );
      })}
    </div>
  )
}

export default DinamicCards