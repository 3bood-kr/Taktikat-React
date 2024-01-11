import React from 'react'
import image from '../../assets/images/home-news-img.png'
import './MainCard.css'
import { Link } from 'react-router-dom'

interface Props{
   
}

interface Props{
    link: string,
    title?: string,
    image?: string,
    date?: string,
    col?: number,

}
export default function MainCard({link, title, image, date, col }: Props) {
  return (
    <>
        <div className={`col-`+col}>
            <Link to={link} className='main-card'>
                <div className="main-card-image">
                    <img src={image} alt="" />
                </div>
                <div className="main-card-body p-2">
                    <span className='date-text mb-3'>{ date }</span>
                    <p>{ title?.substring(0, 15) }...</p>
                </div>
            </Link>
        </div>
    </>
  )
}
