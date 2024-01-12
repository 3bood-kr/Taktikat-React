import React from 'react'
import image from '../../assets/images/about-card.png'
import './AboutCard.css'
import { Link } from 'react-router-dom'
import bg_image from '../../assets/images/about-bg-img.png'
export default function AboutCard() {
  return (
    <div className="about-card mb-3">
      <article className='row'>
          <div className='col-6 d-flex flex-column justify-content-between p-3 position-relative'>
              <img src={bg_image} alt="" className='position-absolute w-100 bottom-0 start-0'/>

              <div className='p-2 z-2'>
                <h2 className='white-card-title'>About Us</h2>
                <p className='about-text'>
                Football Taktikat Your one-stop shop for everything related to the world of football, let's put you in the heart of the action first, first, from shots, goals, news, analysis, and match results in live coverage. Stay with us, and live the non-stop football fun. <br/><br/> related to the world of football, let's put you in the heart of the action first.
              </p>
              </div>
              <div style={{textAlign: 'right', zIndex:2}}>
                <Link className='main-button-style nav-link' to='/contact'>Contact</Link>
              </div>
          </div>
          <div className='col-6 p-0'>
              <img className='about-image' src={image} alt="" />
          </div>
      </article>
    </div>
  )
}
