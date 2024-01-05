import React from 'react'
import image from '../../assets/images/home-news-img.png'
import image1 from '../../assets/images/avatar.png'
import './SecondMainCard.css'
interface Props{
    col: number
}
export default function SecondMainCard({ col }: Props) {
  return (
    <>
        <div className={`col-`+col}>
            <div className='second-main-card'>
                <div className="second-main-card-head p-3">
                    <div className='d-flex align-items-center'>
                        <div className="author-icon">
                            <img src={image1} alt="" />
                        </div>
                        <p className='author-name p-0 px-2'>
                            Talha Ahmed
                        </p>
                    </div>
                    <span className='date m-0'>
                        2 hours ago
                    </span>
                </div>
                <a href='/' className="second-main-card-image">
                    <img src={image} alt="" />
                </a>
            </div>
        </div>
    </>
  )
}
