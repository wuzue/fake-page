import React, { useState } from 'react'
import PlacesCards from './PlacesCards'
import './SecondSec.css'
import DynamicCards from './DynamicCards';
import PublicIcon from '@mui/icons-material/Public';
import PaidIcon from '@mui/icons-material/Paid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const SecondSec = () => {
  return(
    <div className='second-main-div'>
      <p className='textone-second-sec'>Para onde você gostaria de viajar?</p>
      <div className='second-section-card'>
        <PlacesCards/>
      </div>
      <div className='post-cards'>
        <p className='title-post-cards'>Então conheça o Nômade Digital</p>
        <p className='p-post-cards'>O Nômade Digital é o treinamento completo e o <em>passo a passo</em> para você criar
        receitas passivas e ativas, conquistando as tão sonhadas:</p>
      </div>
      <div className='dinamic-part'>
        <DynamicCards/>
      </div>
      <div className='tres-liberdades'>
        <p className='tl-titulo'>Três liberdades!</p>
        <p className='tl-texto'><PublicIcon className='icon-second'/> Liberdade Geográfica</p>
        <p className='tl-texto'><PaidIcon className='icon-second'/> Liberdade Financeira</p>
        <p className='tl-texto'><AccessTimeFilledIcon className='icon-second'/> Liberdade de Tempo</p>
      </div>
    </div> 
  )
}

export default SecondSec;