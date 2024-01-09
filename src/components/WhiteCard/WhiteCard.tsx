import React, { ReactNode, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './WhiteCard.css'
import { LiveTvIcon, CalendarIcon } from '../Icons/Icons'
import { createContext } from 'react'
import Toggle from '../Toggle'

interface Props {
    heading?: string
    link?: string
    showToggle?: boolean
    filter?: false,
    children: ReactNode
    className?: string

}

export const toggleContext = createContext(false);

export default function WhiteCard({ heading, link, showToggle = false, children, filter, className }: Props) {
    const [isToggled, setToggled] = useState(false);

    return (
        <>
            {/* mb-3 is temporary */}
            <article className='white-card p-3 mb-3'>
                <div className='p-1 d-flex align-item-center justify-content-between'>
                    <h2 className='white-card-title'>{heading}</h2>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                        {showToggle && <Toggle onClick={() => (setToggled(!isToggled))}/>}
                        {link && <NavLink to={link}>See All</NavLink>}
                        {filter &&
                            <div className='d-flex gap-2'>
                                <div><LiveTvIcon /></div>
                                <div className='calendar-icon-container d-flex'>
                                    <div className='calendar-icon'>
                                        <CalendarIcon />
                                    </div>
                                    <p className='p-1'>12 sep 2023</p>
                                    <div></div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='white-card-body p-1'>
                    <div className="row">
                        <toggleContext.Provider value={isToggled}>
                            {children}
                        </toggleContext.Provider>
                    </div>
                </div>

            </article>
        </>
    )
}
