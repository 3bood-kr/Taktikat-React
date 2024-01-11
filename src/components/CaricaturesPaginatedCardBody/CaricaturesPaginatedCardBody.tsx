import React from 'react'
import MainCard from '../MainCard'
import { Analysis } from '../AnalysisCardBody/AnalysisCardBody'

interface Props{
    items: Analysis[]
}

export default function CaricaturesPaginatedCardBody({items}: Props) {
    
    console.log(items)
    return (
        <>
            {
                items.map((item) => (
                    <MainCard link='/' title={item.title} image={item.image} date={item.created_at} col={3}/>
                ))
            }
        </>
    )
}
