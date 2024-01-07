import React from 'react'
import { Accordion } from 'react-bootstrap'
import './TopLeaugesCardBody.css'

interface Countries {
    countries: Country[]
}

type Country = {
    id: number,
    name: string,
    flag: string,
    leagues: Leauge[],
}
type Leauge = {
    id: number,
    name: string,
    logo: string,
}

export default function TopLeaugesCardBody({ countries }: Countries) {
    return (
        <>
            <Accordion defaultActiveKey="0">
                {
                    Object.entries(countries).map(([key, {id, name, flag, leagues}]) => (
                        <Accordion.Item className='mb-3' eventKey={id+''}>
                            <Accordion.Header>
                                <span className='circle-logo mx-2'>
                                    <img src={flag}  alt="" />
                                </span>
                                <p>{name}</p>
                            </Accordion.Header>
                            <Accordion.Body className='p-0'>
                                <ul className='p-1 accordion-list'>
                                    {
                                    leagues.map(
                                        (leauge, index) => (                              
                                            <li key={leauge.id} className='d-flex align-items-center px-1 py-3'>
                                                <span className='circle-logo mx-2'>
                                                        <img src={leauge.logo} alt="" />
                                                    </span>
                                                <p>{leauge.name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </>
    )
}
