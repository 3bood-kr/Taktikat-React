import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import SectionLayout from '../../layouts/SectionLayout'
import AsideLayout from '../../layouts/AsideLayout'
import { useQueries } from '@tanstack/react-query';
import { fetchLeaguesByCountry } from '../../fetchers/Leagues';
import Loader from '../../components/Loader';
import TopLeaugesCardBody from '../../components/TopLeaugesCardBody';
import WhiteCard from '../../components/WhiteCard';
import ShowNewsPageCard from '../../components/ShowNewsPageCard';
import LatestNewsCardBody from '../../components/LatestNewsCardBody/LatestNewsCardBody';
import { fetchNewsBySlug } from '../../fetchers/News';
import { useParams } from 'react-router-dom';

export default function NewsShowPage() {
   

    return (
        <>
            <MainLayout>
                <SectionLayout>
                    <ShowNewsPageCard ></ShowNewsPageCard>
                    <WhiteCard heading='Latest News' link='/news'>
                        <LatestNewsCardBody></LatestNewsCardBody>
                    </WhiteCard>
                </SectionLayout>
                <AsideLayout>
                    <WhiteCard heading='Top Leauges'>
                        <TopLeaugesCardBody />
                    </WhiteCard>
                </AsideLayout>
            </MainLayout>
        </>
    )
}
