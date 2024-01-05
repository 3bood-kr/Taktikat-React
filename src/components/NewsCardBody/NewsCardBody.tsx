import React from 'react'
import image from '../../assets/images/home-news-img.png'
import './NewsCardBody.css'
interface Props{
    news?: [],
}
export default function NewsCardBody({ news }: Props) {
  return (
    <>
        <ul>
            <li className='news-card-item mb-2 py-2'>
                <div className='row'>
                    <div className="news-item-image col-3">
                        <img src={image} alt="" />
                    </div>
                    <div className="news-item-content col-9">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur eius consequuntur unde. Voluptate, atque!
                        </p>

                    </div>
                </div>
            </li>
            <li className='news-card-item mb-2 pb-2'>
                <div className='row'>
                    <div className="news-item-image col-3">
                        <img src={image} alt="" />
                    </div>
                    <div className="news-item-content col-9">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur eius consequuntur unde. Voluptate, atque!
                        </p>

                    </div>
                </div>
            </li>
            <li className='news-card-item mb-2 pb-2'>
                <div className='row'>
                    <div className="news-item-image col-3">
                        <img src={image} alt="" />
                    </div>
                    <div className="news-item-content col-9">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur eius consequuntur unde. Voluptate, atque!
                        </p>

                    </div>
                </div>
            </li>
        </ul>
    </>
  )
}
