import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import AsideLayout from '../../layouts/AsideLayout'
import SectionLayout from '../../layouts/SectionLayout'
import AboutCard from '../../components/AboutCard'
import WhiteCard from '../../components/WhiteCard'
import NewsCardBody from '../../components/NewsCardBody'
import MainCard from '../../components/MainCard'
import SecondMainCard from '../../components/SecondMainCard/SecondMainCard'
import MatchesCardBody from '../../components/MatchesCardBody'
import { useQueries, useQuery } from '@tanstack/react-query'
import { fetchMainNews } from '../../fetchers/News'
import { BarLoader, BounceLoader, CircleLoader, ClimbingBoxLoader } from 'react-spinners'
import Loader from '../../components/Loader'
import { fetchAnalysis } from '../../fetchers/Analysis'
import AnalysisCardBody from '../../components/AnalysisCardBody'

export default function HomePage() {

  const [
    mainNewsQuery,
    mainVideoAnalysisQuery,
    mainArticleAnalysisQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: ['main_news'],
        queryFn: fetchMainNews,
      },
      {
        queryKey: ['main_video_analysis'],
        queryFn: () => fetchAnalysis('video', 2),
      },
      {
        queryKey: ['main_article_analysis'],
        queryFn: () => fetchAnalysis('text', 2),
      },
    ]
  });

  if(mainNewsQuery.isLoading || mainVideoAnalysisQuery.isLoading || mainArticleAnalysisQuery.isLoading){
    return <Loader />
  }
  


  return (
    <>
      <MainLayout>

        <SectionLayout>
          <AboutCard />

          <WhiteCard link='/caricatures' heading='Caricature Videos'>
            <MainCard col={3}></MainCard>
            <MainCard col={3}></MainCard>
            <MainCard col={3}></MainCard>
            <MainCard col={3}></MainCard>
          </WhiteCard>

          <WhiteCard link='/analysis' heading='Analysis' showToggle={true}>
            <AnalysisCardBody videos={mainVideoAnalysisQuery.data} articles={mainArticleAnalysisQuery.data}>
              
            </AnalysisCardBody>
          </WhiteCard>

        </SectionLayout>

        <AsideLayout>

          <WhiteCard link='/news' heading='News'>
            <NewsCardBody news={mainNewsQuery.data}/>
          </WhiteCard>

          <WhiteCard heading='Matches'>
            <MatchesCardBody/>
          </WhiteCard>

        </AsideLayout>

      </MainLayout>
    </>
  )
}
