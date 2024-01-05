import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import './WhiteCard.css'
import { LiveTvIcon, CalendarIcon } from '../Icons/Icons'

interface Props{
    heading: string
    link?: string
    filter: false,
    children: ReactNode
    className?: string
}

export default function WhiteCard({ heading, link, children, filter, className }: Props) {
  return (
    <>
    {/* mb-3 is temporary */}
        <article className='row white-card p-3 mb-3'>
            <div className='p-1 d-flex align-item-center justify-content-between'>
                <h2 className='white-card-title'>{ heading }</h2>
                { link && <NavLink to={link}>See All</NavLink>}
                { !link &&
                 <div className='d-flex gap-2'>
                    <div><LiveTvIcon /></div>
                    <div className='calendar-icon-container d-flex'>
                    <div className='calendar-icon'>
                        <CalendarIcon/>
                    </div>
                    <p className='p-1'>12 sep 2023</p>
                    <div></div>
                    </div>
                 </div>
                }
            </div>
            <div className='white-card-body row p-1'>
                { children }
            </div>

        </article>
    </>
  )
}
