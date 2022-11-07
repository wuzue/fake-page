import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-main-div'>
      <div className='footer-left'>
        <p className='logo-text'>FakePage<br></br><span className='digital-text'>Digital</span></p>
      </div>
      <div className='footer-middle'>
        <p className='footer-text'>Fake Media 2022 © Todos os direitos reservados.</p>
        <p className='footer-text'>CNPJ: 00.000.000/0000-00</p>
      </div>
      <div className='footer-right'>
        <p className='footer-text link'><a href='/'>Termos de uso</a></p>
        <p className='footer-text link'><a href='/'>Política de privacidade</a></p>
      </div>
    </div>
  )
}

export default Footer