import React from 'react'
import image from '../../assets/images/home-news-img.png'
import './NewsCardBody.css'
interface News {
    news: newItem[]
}

type newItem = {
    id: number,
    title: string,
    image: string,
    created_at: string,
}

export default function NewsCardBody({ news }: News) {
  return (
    <>
        <ul>
        { news.map(
                    (item, index) => (
                        <li key={item.id} className='news-card-item mb-2 py-2'>
                            <div className='row g-2'>
                                <div className="news-item-image col-3 p-0">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="news-item-content col-9 p-2">
                                    <p>
                                        {item.title}
                                    </p>
                                    <div className='news-item-info d-flex align-items-center justify-content-between mt-auto'>
                                        <a href='/'>Sky News</a>
                                        <span>{item.created_at}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                )
            }
        </ul>
    </>
  )
}
