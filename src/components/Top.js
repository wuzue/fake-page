import React from 'react';
import './Top.css'
import imgOne from '../assets/imgs/imgone.jpg'
import planeSvg from '../assets/imgs/plane-svg.svg'

const Top = () => {
  return (
    <div className='top-main-div'>
      <div className='top-container'>
        <div className='top-logo'>
          <img className='svg-logo' src={planeSvg} alt='.'/>
          <p className='logo-text'>FakePage<br></br><span className='digital-text'>Digital</span></p>
        </div>
        <div className='top-body'>
          <div className='top-left-side'>
            Conquiste a sua tão sonhada liberdade.
            <em>Crie fontes que trabalharão para você enquanto viaja o mundo ou simplesmente curte sua familia em casa.</em>
            <button className='btn-top'>Quero ser nômade digital</button>
          </div>
          <div className='top-right-side'>
            <iframe className='iframe' frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="618" height="347" type="text/html" src="https://www.youtube.com/embed/_ysd-zHamjk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/de/">youtubeembedcode.com/de/</a></small></div><div><small><a href="https://unoregler.com/">regler för uno</a></small></div></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Top