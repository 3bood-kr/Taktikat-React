import React from 'react' 
import './Header.css'
import Logo from '../Logo'
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
        <nav className='row main-container h-100'>
            <div className="logo col-2 d-flex align-items-center justify-content-center">
                <Logo />
            </div>
            <div className='col-7'>
                <ul className='nav h-100 d-flex align-items-end gap-3'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link p-3'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/news' className='nav-link p-3'>News</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/analysis' className='nav-link p-3'>Analysis</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/Caricatures' className='nav-link p-3'>Caricatures</NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-2 d-flex align-items-center">
                <div className='nav-icon m-1'>
                    <CiSearch size={20}/>
                </div>
                <div className='nav-icon m-1'>
                    عربي
                </div>
            </div>
        </nav>
    </header>
  )
}
