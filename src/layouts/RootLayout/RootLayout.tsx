import React, { Children, ReactNode } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
interface Props{
    children?: ReactNode,
}
export default function RootLayout({children} : Props) {
  return (
    <>
        <Header />
          <Outlet />
        <Footer />
    </>

  )
}
