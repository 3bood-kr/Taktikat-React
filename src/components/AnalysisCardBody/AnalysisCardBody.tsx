import React, { useContext, useEffect, useState } from 'react';
import { toggleContext } from '../WhiteCard/WhiteCard';
import SecondMainCard from '../SecondMainCard/SecondMainCard';

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


export default function AnalysisCardBody({ videos, articles }: Props) {
    const isToggled = useContext(toggleContext);
    const [items, setItems] = useState<Analysis[]>(videos);

    useEffect(() => {
        if (!isToggled) {
            setItems(videos);
        } else {
            setItems(articles);
        }
    }, [isToggled, items]);

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
