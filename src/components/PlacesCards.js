import React from 'react'
import './PlacesCards.css'
import paris from '../assets/imgs/paris.png'
import moscow from '../assets/imgs/moscow.png'
import losAngeles from '../assets/imgs/losangeles.jpg'

const PlacesCards = () => {
  return (
    <div class="container">

<div class="travel-card">
  <img src={paris} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image"/>
<div class="travel-card-footer">
  <p class="paragraph-2">Paris, França</p>
</div>
</div>

<div class="travel-card"><img src={moscow} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image"/>
<div class="travel-card-footer">
  <p class="paragraph-2">Moscow, Rússia</p>
</div>

</div>

<div class="travel-card"><img src={losAngeles} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 300px" alt="" class="image"/>
<div class="travel-card-footer">
  <p class="paragraph-2">Los Angeles, EUA</p>
</div>
</div>

</div>
  )
}

export default PlacesCards