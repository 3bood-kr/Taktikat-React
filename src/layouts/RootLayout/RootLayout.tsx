import React, { Children, ReactNode } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props{
  children?: ReactNode,
}

const queryClient = new QueryClient();
export default function RootLayout({children} : Props) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
            <Outlet />
          <Footer />
      </QueryClientProvider>
    </>

  )
}
