import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import SectionLayout from '../../layouts/SectionLayout'
import AsideLayout from '../../layouts/AsideLayout'
import Swiper from '../../components/Swiper'
import WhiteCard from '../../components/WhiteCard'
import AcoordionList from '../../components/TopLeaugesCardBody/TopLeaugesCardBody'
import { useQueries } from '@tanstack/react-query'
import { fetchLeaguesByCountry } from '../../fetchers/Leagues'
import Loader from '../../components/Loader'
import TopLeaugesCardBody from '../../components/TopLeaugesCardBody/TopLeaugesCardBody'
import { json } from 'react-router-dom'

export default function NewsPage() {

    const [
        topLeauges,
    
      ] = useQueries({
        queries: [
          {
            queryKey: ['top_leauges'],
            queryFn: fetchLeaguesByCountry,
          }
        ]
      });

      if(topLeauges.isLoading){
        return <Loader />
      }

    return (
        <>
            <MainLayout>
                <SectionLayout>
                    <Swiper></Swiper>
                </SectionLayout>
                <AsideLayout>
                    <WhiteCard heading='Top Leauges'>
                        <TopLeaugesCardBody countries={topLeauges.data}></TopLeaugesCardBody>
                    </WhiteCard>
                </AsideLayout>
            </MainLayout>
        </>
    )
}
