import React from 'react'
import './FourthSec.css'
import paris from '../assets/imgs/paris.png'
import moscow from '../assets/imgs/moscow.png'
import losAngeles from '../assets/imgs/losangeles.jpg'
import DynamicCards from './DynamicCards'
import PlacesCards from './PlacesCards'
import FourthPlacesCards from './FourthPlacesCards'

const FourthSec = () => {
  return (
    <div className='fourth-main-div'>
      <p className='textone-fourth-sec'>Mais lugares para conhecer!</p>
      <div className='fourth-section-card'>
        <FourthPlacesCards/>
      </div>
    </div> 
  )
}

export default FourthSec