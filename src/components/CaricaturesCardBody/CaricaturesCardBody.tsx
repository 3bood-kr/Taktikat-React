import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { fetchAnalysis } from '../../fetchers/Analysis';
import { Analysis } from '../AnalysisCardBody/AnalysisCardBody';
import Loader from '../Loader';
import MainCard from '../MainCard';

interface Props{
    limit?: number ,
    per_page?: number
}

export default function CaricaturesCardBody({ limit = 4 }: Props) {
    const { data, isLoading, isError, isSuccess } = useQuery<Analysis[]>({
        queryKey: ['main_caricatures'],
        queryFn: () => fetchAnalysis('caricature', limit),
    });

    if (isLoading) {
        return <Loader size={20} />
    }

    if (isError || !data) {
        return 'Error Fetching Data';
    }
    return (
        <>
            {
                data.map((item, index) => (
                    <MainCard
                        col={3}
                        link='/'
                        title={item.title}
                        date={item.created_at}
                        image={item.image}></MainCard>
                ))
            }
        </>
    )
}
