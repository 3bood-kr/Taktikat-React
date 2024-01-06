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
    console.log(countries)
    return (
        <>
            <Accordion defaultActiveKey="0">
                {
                    Object.entries(countries).map(([key, {id, name, flag, leagues}]) => (
                        <Accordion.Item className='mb-3' eventKey={id+''}>
                            <Accordion.Header>
                                <img src={flag} className='mx-2' style={{width: 27, height: 27}} alt="" />
                                {name}
                            </Accordion.Header>
                            <Accordion.Body className='p-0'>
                                <ul className='p-1 accordion-list'>
                                    {
                                    leagues.map(
                                        (leauge, index) => (                              
                                            <li key={leauge.id} className='px-1 py-3 mb-2'>
                                                <img src={leauge.logo} className='mx-2' style={{width: 24, height: 24, borderRadius: '50%'}} alt="" />
                                                {leauge.name}
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
