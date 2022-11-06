import React from 'react'
import './FourthPlacesCards.css'
import saoPaulo from '../assets/imgs/saopaulo1.jpg'
import rioDeJaneiro from '../assets/imgs/riodejaneiro5.jpg'
import minasGerais from '../assets/imgs/minasgerais1.jpg'
import espiritoSanto from '../assets/imgs/espiritosanto.jpg'

const FourthPlacesCards = () => {
  return (
    <div class="container">

<div class="travel-card">
  <img src={rioDeJaneiro} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image"/>
<div class="travel-card-footer">
  <p class="paragraph-2">Sobre o Rio de Janeiro</p>
</div>
</div>

<div class="travel-card"><img src={saoPaulo} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image"/>
<div class="travel-card-footer">
  <p class="paragraph-2">Sobre São Paulo</p>
</div>

</div>

<div class="travel-card"><img src={minasGerais} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image"/>
<div class="travel-card-footer">
  <p class="paragraph-2">Sobre Minas Gerais</p>
</div>
</div>

<div class="travel-card"><img src={espiritoSanto} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image"/>
<div class="travel-card-footer">
  <p class="paragraph-2">Sobre o Espírito Santo</p>
</div>
</div>

</div>
  )
}

export default FourthPlacesCards