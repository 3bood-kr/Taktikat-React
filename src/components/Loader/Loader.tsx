import React from 'react'
import { SyncLoader } from 'react-spinners'
import './Loader.css'

interface Props{
  size?: number
}
export default function Loader({ size = 50 }: Props) {
  return (
    <>
        <main className='main-container loader-container'>
            <SyncLoader 
                color='#502464'
                size={size}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </main>
    </>

  )
}
