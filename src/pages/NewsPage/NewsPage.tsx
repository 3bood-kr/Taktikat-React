import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import SectionLayout from '../../layouts/SectionLayout'
import AsideLayout from '../../layouts/AsideLayout'
import Swiper from '../../components/Swiper'
import WhiteCard from '../../components/WhiteCard'
import TopLeaugesCardBody from '../../components/TopLeaugesCardBody/TopLeaugesCardBody'
import { Links, Meta } from '../CaricaturesPage/CaricaturesPage'
import NewsPaginatedCardBody from '../../components/NewsPaginatedCardBody'
import Pagination from '../../components/Pagination'
import AdCard from '../../components/AdCard'
import AnalysisCardBody from '../../components/AnalysisCardBody'
import { useQuery } from '@tanstack/react-query'
import { fetchMainNews } from '../../fetchers/News'
import { newItem } from '../../components/NewsCardBody/NewsCardBody'
import Loader from '../../components/Loader'

interface Props {
    page: number
    setPaginationData: (data: { meta: Meta, links: Links }) => void
}

export default function NewsPage() {
    const [page, setPage] = useState(1);
    const [paginationData, setPaginationData] = useState<{ meta: Meta, links: Links }>()

    const {data, isLoading, isError} = useQuery<newItem[]>({
        queryKey: ['main_news'],
        queryFn: fetchMainNews,
    });

    if(isLoading){
        return <Loader size={20} />
    }

    if(isError || !data){
        return 'No'
    }

    return (
        <>
            <MainLayout>
                <SectionLayout>
                    <Swiper slides={data}/>
                    <WhiteCard heading='News Videos'>
                        <NewsPaginatedCardBody page={page} setPaginationData={setPaginationData}/>
                    </WhiteCard>
                    <WhiteCard heading='Analysis' showToggle link='/analysis'>
                        <AnalysisCardBody />
                    </WhiteCard>
                    { paginationData && <Pagination links={paginationData.links} meta={paginationData.meta} setPage={setPage}/>}

                </SectionLayout>
                <AsideLayout>
                    <WhiteCard heading='Top Leauges'>
                        <TopLeaugesCardBody></TopLeaugesCardBody>
                    </WhiteCard>
                    <AdCard/>
                </AsideLayout>
            </MainLayout>
        </>
    )
}
