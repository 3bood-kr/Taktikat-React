import React, { useContext, useEffect, useState } from 'react';
import { toggleContext } from '../WhiteCard/WhiteCard';
import SecondMainCard from '../SecondMainCard/SecondMainCard';
import { useQueries } from '@tanstack/react-query';
import { fetchMainNews } from '../../fetchers/News';
import { fetchAnalysis } from '../../fetchers/Analysis';
import Loader from '../Loader';

interface Props{
    videos: Analysis[],
    articles: Analysis[]
}

export interface Analysis {
    id: number;
    title?: string;
    description?: string;
    image: string
    video_url?: string;
    analyst: {
        name: string;
        image: string;
    };
    created_at: string;
}


export default function AnalysisCardBody() {
    const isToggled = useContext(toggleContext);
    const [items, setItems] = useState<Analysis[]>([]);
    const [
        mainArtcileAnalysis,
        mainVideoAnalysis
    ] = useQueries(
        {
            queries: [
                {
                    queryKey: ['main_article_analysis'],
                    queryFn: () => fetchAnalysis('text', 2),
                },
                {
                    queryKey: ['main_video_analysis'],
                    queryFn: () => fetchAnalysis('video', 2),
                  },
                ]
            }
            );
            
    useEffect(() => {
        if (!isToggled) {
            setItems(mainVideoAnalysis.data || []);
        } else {
            setItems(mainArtcileAnalysis.data || []);
        }
    }, [isToggled, items]);
            
            
    if(mainArtcileAnalysis.isLoading || mainVideoAnalysis.isLoading){
        return <Loader size={20}/>
    }
    if(mainArtcileAnalysis.isError || mainVideoAnalysis.isError || !mainArtcileAnalysis.data || !mainVideoAnalysis.data){
        return 'Error';
    }

    return (
        <>
            {
                items.map((item, index) => (
                    <SecondMainCard data={item} col={6}>
                    </SecondMainCard>
                ))
            }
        </>
    );
}
