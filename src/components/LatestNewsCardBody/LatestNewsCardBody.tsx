import React, { useState, useEffect } from 'react';
import MainCard from '../MainCard';
import { useQueries } from '@tanstack/react-query';
import { fetchMainNews } from '../../fetchers/News';
import { newItem } from '../NewsCardBody/NewsCardBody';

export default function LatestNewsCardBody() {
    const [
        mainNewsQuery,
    ] = useQueries({
        queries: [
            {
                queryKey: ['main_news'],
                queryFn: fetchMainNews,
            },
        ],
    });

    const [items, setItems] = useState<newItem[]>([]);

    useEffect(() => {
        if (mainNewsQuery.isSuccess) {
            setItems(mainNewsQuery.data);
        }
    }, [mainNewsQuery.data]);

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
