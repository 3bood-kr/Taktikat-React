import React, { useState } from 'react'
import SectionLayout from '../../layouts/SectionLayout'
import AsideLayout from '../../layouts/AsideLayout'
import WhiteCard from '../../components/WhiteCard'
import MainLayout from '../../layouts/MainLayout'
import CaricaturesCardBody from '../../components/CaricaturesCardBody'
import CaricaturesPaginatedCardBody from '../../components/CaricaturesPaginatedCardBody/CaricaturesPaginatedCardBody'
import { useQuery } from '@tanstack/react-query'
import { fetchAnalysis, fetchPaginatedAnalysis } from '../../fetchers/Analysis'
import Loader from '../../components/Loader'
import { Analysis } from '../../components/AnalysisCardBody/AnalysisCardBody'
import Pagination from '../../components/Pagination'
import LatestNewsCardBody from '../../components/LatestNewsCardBody/LatestNewsCardBody'
import TopLeaugesCardBody from '../../components/TopLeaugesCardBody'
import AdCard from '../../components/AdCard'

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Links {
    first: string;
    last: string;
    prev: string | null;
    next: string;
}

export interface AnalysisResponse {
    status: number;
    code: number;
    locale: string;
    message: string;
    data: Analysis[];
    links: Links;
    meta: Meta;
}

export default function CaricaturesPage() {
    const [page, setPage] = useState(1);
    const [paginationData, setPaginationData] = useState<{meta: Meta, links: Links}>()

    return (
        <>
            <MainLayout>
                <SectionLayout>

                    <WhiteCard heading='Caricature Videos'>
                        <CaricaturesPaginatedCardBody page={page} setPaginationData={setPaginationData}/>
                    </WhiteCard>

                    <WhiteCard heading='Latest News' link='/news'>
                        <LatestNewsCardBody />
                    </WhiteCard>

                    { paginationData && <Pagination links={paginationData.links} meta={paginationData.meta} setPage={setPage}/>}
                </SectionLayout>

                <AsideLayout>
                
                    <WhiteCard heading='Top Leagues'>
                        <TopLeaugesCardBody />
                        <AdCard />
                    </WhiteCard>
                </AsideLayout>
            </MainLayout>
        </>
    )
}