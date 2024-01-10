import React, { useState, useEffect } from 'react';
import MainCard from '../MainCard';
import { useQueries, useQuery } from '@tanstack/react-query';
import { fetchMainNews } from '../../fetchers/News';
import { newItem } from '../NewsCardBody/NewsCardBody';

export default function LatestNewsCardBody() {
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['main_news'],
        queryFn: fetchMainNews,
    })

    const [items, setItems] = useState<newItem[]>([]);

    useEffect(() => {
        if (isSuccess) {
            setItems(data);
        }
    }, [data]);

    return (
        <>
            {
                items.map((item, index) => (
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
