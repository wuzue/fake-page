import React from 'react';
import './SixthSec.css';
import aboutMe from '../assets/imgs/businessman.png'
import aboutMeMobile from '../assets/imgs/aboutme.svg'
import Faq from './Faq.js';

const SixthSec = () => {
  return (
    <div className='sixth-main-div'>
      <div className='sixth-div'>
        <div className='sixth-left-side'>
          <p className='quem-sou-eu'>Quem sou eu?</p>
          <p className='sub-titulo-sixth'>Me chamo John Doe, nascido no Rio de Janeiro em um bairro pobre.</p>
          <p>Antes dos meus 30 anos já conquistei 3 diplomas em Princeton, tenho 14 livros publicados, já viajei para mais de 101 países e atualmente comando 6 empresas,<em className='especialista'>sou considerado o MAIOR ESPECIALISTA em nomadismo digital</em>.</p>
          <p>Através dos meus treinamentos digitais já ajudei mais de 24168 pessoas a mudarem de vida através do marketing digital.</p>
          <p>Já passamos de 24000 alunos entre todos os cursos e todos que já passaram pela nossa faculdade.</p>
          <p>Sou uma máquina de monetização, todo mês estou faturando alto com meu conhecimento online e vou ensinar você a fazer o mesmo.</p>
        </div>
        <div className='sixth-right-side'>
          <img className='sixth-img-right' src={aboutMe} />
          <img className='sixth-img-right-mobile' src={aboutMeMobile}/>
        </div>
      </div>
      <div className='faq-section'>
        <p className='title-faq'>Dúvidas Frequentes</p>
       <Faq/>
      </div>
    </div>
  )
}

export default SixthSec