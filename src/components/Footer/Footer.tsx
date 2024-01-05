import React from 'react'
import './Footer.css'
import Logo from '../Logo'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="main-container row align-items-center h-100">
            <div className="col-4">
                <div className='mb-3'>
                    <Logo />
                </div>
                <p className='text-white'>Football Taktikat: Your one-stop shop for everything related to the world of football, let's put you in the heart of the action first, first, from shots, goals, news, analysis, and match results in live coverage. Stay with us, and live the non-stop football fun.</p>
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
        </div>
    </footer>
  )
}
