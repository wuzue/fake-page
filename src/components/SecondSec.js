import React from 'react'
import './SecondSec.css'
import paris from '../assets/imgs/paris.png'
import moscow from '../assets/imgs/moscow.png'
import losAngeles from '../assets/imgs/losangeles.jpg'

const SecondSec = () => {
  return (
    <div className='second-main-div'>
      <p id='textone-second-sec'>Para onde você gostaria de viajar?</p>
      <div className='second-section-card'>
        <div className='card'>
          <img src={paris} alt='..'/>
          <div className='text'>
            <p>Paris, França</p>
          </div>
        </div>
        <div className='card'>
          <img src={moscow} alt='..'/>
          <div className='text'>
            <p>Moscou, Russia</p>
          </div>
        </div>
        <div className='card'>
          <img src={losAngeles} alt='..'/>
          <div className='text'>
            <p>Los Angeles, EUA</p>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default SecondSec