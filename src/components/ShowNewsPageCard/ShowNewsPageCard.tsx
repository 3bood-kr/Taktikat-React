import React from 'react'
import './ShowNewsPageCard.css'
import { newItem } from '../NewsCardBody/NewsCardBody'

interface Props{
    data: newItem
}

export default function ShowNewsPageCard({data}: Props) {
    return (
        <>
            <article className='show-news-page-card mb-3'>
                <div className='show-news-page-image'>
                    <img src={data.image} alt="" />
                </div>
                <div className='show-news-page-body p-3'>
                    <div className='d-flex align-items-center justify-content-between pb-3'>
                        <a href='/' className='text-pink'>Sky News</a>
                        <p className='text-pink'>{  }</p>
                    </div>
                    <div className='show-news-title pb-3'>
                        { data.title }
                    </div>
                    <div className='show-news-description'>
                        {data.description}
                    </div>
                </div>
            </article>
        </>
    )
}
