import React from 'react'
import './FourthSec.css'
import paris from '../assets/imgs/paris.png'
import moscow from '../assets/imgs/moscow.png'
import losAngeles from '../assets/imgs/losangeles.jpg'

const FourthSec = () => {
  return (
    <div className='fourth-div'>
       <p className='mais-lugares'>Mais lugares para conhecer</p>
      <div className='fourth-container'>
        <div className='mais-lugares-container'>
        
        <div className='card-lugar'>
          <img src={paris} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image-fourth"/>
          <div className='card-lugar-footer'>
            <p className='paragraph-4'>Rio de Janeiro</p>
          </div>
        </div>

        <div className='card-lugar'>
          <img src={moscow} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image-fourth"/>
          <div className='card-lugar-footer'>
            <p className='paragraph-4'>Rio de Janeiro</p>
          </div>
        </div>

        <div className='card-lugar'>
          <img src={losAngeles} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image-fourth"/>
          <div className='card-lugar-footer'>
            <p className='paragraph-4'>Rio de Janeiro</p>
          </div>
        </div>

        <div className='card-lugar'>
          <img src={losAngeles} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image-fourth"/>
          <div className='card-lugar-footer'>
            <p className='paragraph-4'>Rio de Janeiro</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default FourthSec