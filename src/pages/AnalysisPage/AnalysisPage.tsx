import React, { useContext, useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import SectionLayout from '../../layouts/SectionLayout'
import AsideLayout from '../../layouts/AsideLayout'
import WhiteCard from '../../components/WhiteCard'
import TopLeaugesCardBody from '../../components/TopLeaugesCardBody'
import { useQuery } from '@tanstack/react-query'
import { newItem } from '../../components/NewsCardBody/NewsCardBody'
import { fetchMainNews } from '../../fetchers/News'
import Loader from '../../components/Loader'
import Swiper from '../../components/Swiper'
import LatestNewsCardBody from '../../components/LatestNewsCardBody/LatestNewsCardBody'
import Pagination from '../../components/Pagination'
import AnlysisPaginatedCardBody from '../../components/AnlysisPaginatedCardBody'
import { Links, Meta } from '../CaricaturesPage/CaricaturesPage'
import AdCard from '../../components/AdCard'
import { toggleContext } from '../../components/WhiteCard/WhiteCard'

export default function AnalysisPage() {
    const [videosPage, setVideosPage] = useState(1);
    const [articlesPage, setArticlesPage] = useState(1);
    
    const [paginationData, setPaginationData] = useState<{ meta: Meta, links: Links }>()

    const [toggled, setToggled] = useState(false);
    



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
        <MainLayout>

            <SectionLayout>
                <Swiper slides={data} />
                <WhiteCard heading='Analysis' showToggle onToggle={(isToggled) => setToggled(isToggled)}>
                    <AnlysisPaginatedCardBody articlesPage={articlesPage} videosPage={videosPage} setPaginationData={setPaginationData}/>
                </WhiteCard>
                <WhiteCard heading='Latest News' link='/news'>
                    <LatestNewsCardBody></LatestNewsCardBody>
                </WhiteCard>
                { paginationData && <Pagination links={paginationData.links} meta={paginationData.meta} setPage={ toggled ? setArticlesPage : setVideosPage}/>}

                
            </SectionLayout>

            <AsideLayout>
                <WhiteCard heading='Top Leagues'>
                    <TopLeaugesCardBody></TopLeaugesCardBody>
                </WhiteCard>
                <AdCard />
            </AsideLayout>

        </MainLayout>
    )
}
