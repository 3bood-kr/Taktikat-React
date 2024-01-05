import React from 'react'
import image from '../../assets/images/about-card.png'
import './AboutCard.css'
import { Link } from 'react-router-dom'
export default function AboutCard() {
  return (
    <article className='row about-card p-0'>
        <div className='col-6 p-3 d-flex flex-column justify-content-between'>
            <div>
              <h2 className='white-card-title'>About Us</h2>
              <p className='about-text'>
              Football Taktikat Your one-stop shop for everything related to the world of football, let's put you in the heart of the action first, first, from shots, goals, news, analysis, and match results in live coverage. Stay with us, and live the non-stop football fun. <br/><br/> related to the world of football, let's put you in the heart of the action first.
            </p>
            </div>
            <div style={{textAlign: 'right'}}>
              <Link className='main-button-style nav-link' to='/contact'>Continue</Link>
            </div>

        </div>
        <div className='col-6 p-0'>
            <img className='about-image' src={image} alt="" />
        </div>
    </article>
  )
}
