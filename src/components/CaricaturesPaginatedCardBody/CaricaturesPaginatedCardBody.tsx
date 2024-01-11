import React, { useEffect } from 'react'
import MainCard from '../MainCard'
import { Analysis } from '../AnalysisCardBody/AnalysisCardBody'
import { Links, Meta } from '../../pages/CaricaturesPage/CaricaturesPage'
import { useQuery } from '@tanstack/react-query'
import { fetchPaginatedAnalysis } from '../../fetchers/Analysis'
import Loader from '../Loader'

export interface AnalysisResponse {
    status: number;
    code: number;
    locale: string;
    message: string;
    data: Analysis[];
    links: Links;
    meta: Meta;
}

interface Props{
    page: number
    setPaginationData: (data: {meta: Meta, links: Links}) => void
}

export default function CaricaturesPaginatedCardBody({page, setPaginationData}: Props) {
    
    const { data, isLoading, isError, isSuccess } = useQuery<AnalysisResponse>({
        queryKey: ['caricatures', page],
        queryFn: () => fetchPaginatedAnalysis('caricature', page)
    })

    useEffect(() => {
        if (isSuccess) {
            setPaginationData({ meta: data.meta, links: data.links });
        }
    }, [isSuccess, setPaginationData, data]);

    if (isLoading) {
        return <Loader size={20} />
    }

    if(isError || !data?.data){
        return 'Error Fetching Carictures'
    }


    return (
        <>
            {
                data.data.map((item) => (
                    <MainCard link='/' title={item.title} image={item.image} date={item.created_at} col={3}/>
                ))
            }
        </>
    )
}
