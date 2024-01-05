import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import AsideLayout from '../../layouts/AsideLayout'
import SectionLayout from '../../layouts/SectionLayout'
import AboutCard from '../../components/AboutCard'
import WhiteCard from '../../components/WhiteCard'
import NewsCardBody from '../../components/NewsCardBody'
import MainCard from '../../components/MainCard'
import SecondMainCard from '../../components/SecondMainCard/SecondMainCard'
import MatchesCardBody from '../../components/MatchesCardBody'

export default function HomePage() {
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

          <WhiteCard link='/analysis' heading='Analysis'>
            <SecondMainCard col={6}></SecondMainCard>
            <SecondMainCard col={6}></SecondMainCard>
          </WhiteCard>

        </SectionLayout>

        <AsideLayout>

          <WhiteCard link='/news' heading='News'>
            <NewsCardBody />
          </WhiteCard>

          <WhiteCard heading='Matches'>
            <MatchesCardBody/>
          </WhiteCard>

        </AsideLayout>

      </MainLayout>
    </>
  )
}
