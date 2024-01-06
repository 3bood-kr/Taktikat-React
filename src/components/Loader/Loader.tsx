import React from 'react'
import { SyncLoader } from 'react-spinners'
import './Loader.css'

export default function Loader() {
  return (
    <>
        <main className='main-container loader-container'>
            <SyncLoader 
                color='#502464'
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </main>
    </>

  )
}
