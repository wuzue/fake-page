import React from 'react'
import PlacesCards from './PlacesCards'
import './SecondSec.css'


const SecondSec = () => {
  return (
    <div className='second-main-div'>
      <p id='textone-second-sec'>Para onde você gostaria de viajar?</p>
      <div className='second-section-card'>
        <PlacesCards/>
      </div>
    </div> 
  )
}

export default SecondSec