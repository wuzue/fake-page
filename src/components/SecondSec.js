import React, { useState } from 'react'
import PlacesCards from './PlacesCards'
import './SecondSec.css'
import DinamicCards from './DinamicCards';



const SecondSec = () => {
  return(
    <div className='second-main-div'>
      <p className='textone-second-sec'>Para onde você gostaria de viajar?</p>
      <a href='#img-paris'>Click me</a>
      <div className='second-section-card'>
        <PlacesCards/>
      </div>
      <div className='post-cards'>
        <p className='title-post-cards'>Então conheça o Nômade Digital</p>
        <p className='p-post-cards'>O Nômade Digital é o treinamento completo e o <em>passo a passo</em> para você criar
        receitas passivas e ativas, conquistando as tão sonhadas:</p>
      </div>
      <div className='dinamic-part'>
        <DinamicCards/>
      </div>
    </div> 
  )
}

export default SecondSec;