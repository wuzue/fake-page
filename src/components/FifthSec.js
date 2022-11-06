import React from 'react'
import './FifthSec.css'
import travel from '../assets/imgs/travel.png'

const FifthSec = () => {
  return (
    <div className='fifth-div'>
      <div className='fifth-container'>
        <div className='fifth-left-side'>
          <p className='fifth-title'>Quanto vale para você ter mais liberdade?</p>
          <p className='fifth-text'>Quanto tempo e investimento custaria pra aprender tudo o que eu aprendi sozinho nos últimos 10 anos?</p>
          <p className='fifth-text'>Essa versão do Nômade Digital poderia ser facilmente vendida por 10 mil reais.</p>
          <p className='fifth-text'>Um valor que se inscrevendo hoje você ganha só em BÔNUS.</p>
        </div>
        <div className='fifth-right-side'>
          <img className='fifth-img' src={travel} alt='aaa'/>
        </div>
      </div>
    </div>
  )
}

export default FifthSec