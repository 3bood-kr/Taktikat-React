import React, { useState, useEffect } from 'react';
import MainCard from '../MainCard';
import { useQueries, useQuery } from '@tanstack/react-query';
import { fetchMainNews } from '../../fetchers/News';
import { newItem } from '../NewsCardBody/NewsCardBody';
import Loader from '../Loader';

export default function LatestNewsCardBody() {
    const { data, isLoading, isSuccess, isError } = useQuery<newItem[]>({
        queryKey: ['main_news'],
        queryFn: fetchMainNews,
    })    
    if(isLoading){
        return <Loader size={20}/>
    }

    if(isError || !data){
        return 'Error Fetching News';
    }

    return (
        <>
            {
                data.map((item, index) => (
                    <MainCard
                        key={index}
                        col={3}
                        title={item.title}
                        date={item.created_at}
                        image={item.image}
                        link={`/news/${item.slug}`}
                    />
                ))}
        </>
    );
}
