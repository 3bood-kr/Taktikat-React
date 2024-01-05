import React from 'react'
import image from '../../assets/images/home-news-img.png'
import './MainCard.css'

interface Props{
    col: number
}
export default function MainCard({ col }: Props) {
  return (
    <>
        <div className={`col-`+col}>
            <a href='/' className='main-card'>
                <div className="main-card-image">
                    <img src={image} alt="" />
                </div>
                <div className="main-card-body p-2">
                    <span className='date-text mb-3'>July 13, 2023</span>
                    <p>Week’s Ultimate Transfer Roundup</p>
                </div>
            </a>
        </div>
    </>
  )
}
