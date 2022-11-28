import React from 'react'
import './FifthSec.css'
import travel from '../assets/imgs/travel.png'
import planeSvg from '../assets/imgs/plane-svg.svg'
import { FaCheckSquare } from 'react-icons/fa';

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
      <div className='fifth-container-two'>
        <div className='fifth-mid'>
          <div className='logo-fifth'>
            <img className='svg-logo-fifth' src={planeSvg} alt='.'/>
            <p className='logo-text-fifth'>FakePage<br></br><span className='digital-text-fifth'>Digital</span></p>
          </div>
          <p className='comece-hoje'>comece hoje mesmo</p>
          <p className='desconto'>De <em className='off'>R$10.000</em> por</p>
          <p>12x de <em className='preco-parcelado'>R$208,33</em></p>
          <p>Ou R$ 2,000,00 à vista <em className='twenty-off'>(20% de desconto)</em></p>
          <button className='quero-me-inscrever'>Quero me inscrever</button>
          <p className='inscrevendo-agora'>Veja o que você recebe se INSCREVENDO AGORA</p>
          <ul className='ul-lista'>
            <li><FaCheckSquare className='check-icon' style={{color: '#43caf4'}}/> Treinamento completo com 7 módulos de conteúdo</li>
            <li><FaCheckSquare className='check-icon' style={{color: '#43caf4'}}/> Bônus Introdução Ao ZZZ com John Doe - R$997</li>
            <li><FaCheckSquare className='check-icon' style={{color: '#43caf4'}}/> Bônus Aprendendo com John Doe - R$500</li>
            <li><FaCheckSquare className='check-icon' style={{color: '#43caf4'}}/> Bônus MakeMoney com equipe J.Doe - R$300</li>
            <li><FaCheckSquare className='check-icon' style={{color: '#43caf4'}}/> Bônus Como Bombar nos Negócios Com John Doe - R$700</li>
          </ul>
          <button className='quero-me-inscrever'>Inscreva-se agora</button>
        </div>
      </div>
    </div>
  )
}

export default FifthSec