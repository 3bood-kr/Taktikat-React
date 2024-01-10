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
import CaricaturesCardBody from '../../components/CaricaturesCardBody'

export default function HomePage() {


  return (
    <>
      <MainLayout>

        <SectionLayout>
          <AboutCard />

          <WhiteCard link='/caricatures' heading='Caricature Videos'>
            <CaricaturesCardBody></CaricaturesCardBody>
          </WhiteCard>

          <WhiteCard link='/analysis' heading='Analysis' showToggle={true}>
            <AnalysisCardBody/>
          </WhiteCard>

        </SectionLayout>

        <AsideLayout>

          <WhiteCard link='/news' heading='News'>
            <NewsCardBody/>
          </WhiteCard>

          <WhiteCard heading='Matches'>
            <MatchesCardBody/>
          </WhiteCard>

        </AsideLayout>

      </MainLayout>
    </>
  )
}
