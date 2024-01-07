import React, {FunctionComponent} from 'react'
import './SecondMainCard.css'
import { Analysis  } from '../AnalysisCardBody/AnalysisCardBody'


interface Props{
    col: number
    data: Analysis,
}


export default function SecondMainCard({ col, data }: Props) {
  return (
    <>
        <div className={`col-`+col}>
            <div className='second-main-card'>
                <div className="second-main-card-head p-3">
                    <div className='d-flex align-items-center'>
                        <div className="author-icon">
                            <img src={data.analyst.image} alt="" />
                        </div>
                        <p className='author-name p-0 px-2'>
                            {data.analyst.name}
                        </p>
                    </div>
                    <span className='date m-0'>
                        {data.created_at}
                    </span>
                </div>
                <a href={data.video_url} target='_blank' className="second-main-card-image">
                    <img src={data.image} alt="" />
                    <div className='second-main-card-overlay p-3'>
                        <p>{data.title}</p>
                    </div>
                </a>
            </div>
        </div>
    </>
  )
}
