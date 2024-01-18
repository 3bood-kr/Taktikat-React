import React from 'react'
import './Footer.css'
import Logo from '../Logo'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaGooglePlay, FaApple, } from "react-icons/fa";
import { SiHuawei } from "react-icons/si";

export default function Footer() {
    return (
        <footer className='footer d-flex align-items-center'>
            <div className="main-container row">
                <div className="col-5">
                    <div className='mb-3'>
                        <Logo />
                    </div>
                    <p className='text-white'>Football Taktikat: Your one-stop shop for everything related to the world of football, let's put you in the heart of the action first, first, from shots, goals, news, analysis, and match results in live coverage. Stay with us, and live the non-stop football fun.</p>
                </div>
                <div className="col-4 d-flex justify-content-between">
                    <ul className='text-white mx-auto'>
                        <li>
                            <NavLink to='/' className='nav-link mb-2'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='nav-link mb-2'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/news' className='nav-link mb-2'>News</NavLink>
                        </li>
                        <li>
                            <NavLink to='/analysis' className='nav-link mb-2'>Analysis</NavLink>
                        </li>
                        <li>
                            <NavLink to='/caricatures' className='nav-link mb-2'>Caricatures</NavLink>
                        </li>
                    </ul>
                    <ul className='text-white mx-auto'>
                        <li>
                            <NavLink to='/contact' className='nav-link mb-2'>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/matches' className='nav-link mb-2'>Matches</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lorem' className='nav-link mb-2'>Lorem Ipsum</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-3 text-white d-flex flex-column align-items-end">
                    <div className=''>
                        <div className="d-flex flex-column mb-3">
                            <p className='social-text mb-3'>Follow Us</p>
                            <div className="d-flex justify-content-between gap-4">
                                <a href='/'>
                                    <FaFacebook size={30} color='white' />
                                </a>
                                <FaTwitter size={30} color='white' />
                                <FaInstagram size={30} color='white' />
                                <FaTiktok size={30} color='white' />
                            </div>
                        </div>
                        <div className="d-flex flex-column mb-3">
                            <p className='social-text mb-3'>Download The App</p>
                            <div className="d-flex justify-content-between gap-4">
                                <FaApple size={30} color='white' />
                                <FaGooglePlay size={30} color='white' />
                                <SiHuawei size={30} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
