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

interface Props {
    articlesPage: number
    videosPage: number
    setPaginationData: (data: { meta: Meta, links: Links }) => void
}
export default function AnlysisPaginatedCardBody({ articlesPage, videosPage, setPaginationData }: Props) {
    const isToggled = useContext(toggleContext);
    const [items, setItems] = useState<Analysis[]>([]);
    const [
        artcileAnalysis,
        videoAnalysis
    ] = useQueries(
        {
            queries: [
                {
                    queryKey: ['article_analysis', articlesPage],
                    queryFn: () => fetchPaginatedAnalysis('text', articlesPage, 6),
                },
                {
                    queryKey: ['video_analysis', videosPage],
                    queryFn: () => fetchPaginatedAnalysis('video', videosPage, 6),
                },
            ]
        }
    );

    useEffect(() => {
        if (videoAnalysis.isSuccess && !isToggled) {
            setItems((prevItems) => videoAnalysis.data?.data || []);
            setPaginationData({ meta: videoAnalysis.data.meta, links: videoAnalysis.data.links });
        } 
        if (artcileAnalysis.isSuccess && isToggled) {
            setItems((prevItems) => artcileAnalysis.data?.data || []);
            setPaginationData({ meta: artcileAnalysis.data.meta, links: artcileAnalysis.data.links });
        }
    }, [videoAnalysis.data, artcileAnalysis.data, isToggled, articlesPage, videosPage, artcileAnalysis.isSuccess, videoAnalysis.isSuccess]);

    if (videoAnalysis.isLoading || artcileAnalysis.isLoading) {
        return <Loader size={20} />
    }

    if (videoAnalysis.isError || artcileAnalysis.isError) {
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
