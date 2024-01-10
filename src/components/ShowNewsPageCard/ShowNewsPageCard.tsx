import React from 'react'
import './ShowNewsPageCard.css'
import { newItem } from '../NewsCardBody/NewsCardBody'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsBySlug } from '../../fetchers/News';
import Loader from '../Loader';

export default function ShowNewsPageCard() {
    const params = useParams();
    const {data, isError, isLoading, isSuccess} = useQuery({
        queryKey: ['show_news', params],
        queryFn: () => fetchNewsBySlug(params.slug),
    });

    // if (topLeauges.isLoading || showNews.isLoading) {
    //     return <Loader />
    // }
    if(isLoading){
        return <Loader size={20}/>
    }

    if(isError){
        return <h1>error</h1>
    }
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
