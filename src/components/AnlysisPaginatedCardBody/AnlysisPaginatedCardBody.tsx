import React, { useContext, useEffect, useState } from 'react'
import './AnlysisPaginatedCardBody.css'
import { Analysis } from '../AnalysisCardBody/AnalysisCardBody';
import { useQueries } from '@tanstack/react-query';
import { fetchPaginatedAnalysis } from '../../fetchers/Analysis';
import { toggleContext } from '../WhiteCard/WhiteCard';
import { AnalysisResponse } from '../CaricaturesPaginatedCardBody/CaricaturesPaginatedCardBody';
import SecondMainCard from '../SecondMainCard/SecondMainCard';
import { Links, Meta } from '../../pages/CaricaturesPage/CaricaturesPage';
import Loader from '../Loader';

interface Props{
    page: number
    setPaginationData: (data: {meta: Meta, links: Links}) => void
}
export default function AnlysisPaginatedCardBody({page, setPaginationData}: Props) {
    const isToggled = useContext(toggleContext);
    const [items, setItems] = useState<Analysis[]>([]);
    const [
        artcileAnalysis,
        videoAnalysis
    ] = useQueries(
        {
            queries: [
                {
                    queryKey: ['article_analysis', page],
                    queryFn: () => fetchPaginatedAnalysis('text', page, 6),
                },
                {
                    queryKey: ['video_analysis', page],
                    queryFn: () => fetchPaginatedAnalysis('video', page, 6),
                  },
                ]
            }
            );

    useEffect(() => {
        if (videoAnalysis.isSuccess && !isToggled) {
            setPaginationData({ meta: videoAnalysis.data.meta, links: videoAnalysis.data.links });
        }
        else if(artcileAnalysis.isSuccess){
            setPaginationData({ meta: artcileAnalysis.data.meta, links: artcileAnalysis.data.links });
        }
    }, [videoAnalysis.isSuccess, videoAnalysis.data, artcileAnalysis.isSuccess, artcileAnalysis.data, isToggled]);


    useEffect(() => {
        if (!isToggled) {
            setItems(prevItems => videoAnalysis.data?.data || []);
        } else {
            setItems(prevItems => artcileAnalysis.data?.data || []);
        }
    }, [isToggled, videoAnalysis.data, videoAnalysis.data]);

    if(videoAnalysis.isLoading || artcileAnalysis.isLoading){
        return <Loader size={20} />
    }

    if(videoAnalysis.isError || artcileAnalysis.isError){
        return 'Error Fetching Analysis';
    }

    
    return (
        <>
            {
                items && items.map((item, index) => (
                    <SecondMainCard data={item} col={6}>
                    </SecondMainCard>
                ))
            }
        </>
    )
}
