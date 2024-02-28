import React from 'react'
import { Accordion } from 'react-bootstrap'
import './TopLeaugesCardBody.css'
import { fetchLeaguesByCountry } from '../../fetchers/Leagues'
import { UseQueryResult, useQueries, useQuery } from '@tanstack/react-query'
import { json } from 'react-router-dom'
import Loader from '../Loader'

interface Country {
    id: number;
    name: string;
    flag: string;
    name_values: {
        ar: string;
        en: string;
    };
    leagues: {
        id: number;
        name: string;
        integration_attributes: {
            id: number;
            sofaScore?: {
                id: number;
                name: string;
                slug: string;
            };
        };
        name_values: {
            ar: string;
            en: string;
        };
        type: string;
        logo: string;
        is_favorite: boolean;
        season: {
            id: number;
            name: number;
            name_labled: string;
            is_current: boolean;
        };
    }[];
}

export interface Countries {
    [key: string]: Country;
}

export default function TopLeaugesCardBody() {
    const { data, isLoading, isSuccess, isError }: UseQueryResult<Countries> = useQuery<Countries>({
        queryKey: ['topLeagues'],
        queryFn: fetchLeaguesByCountry,
    });

    if(isLoading){
        return <Loader size={20} />
    }

    if(isError || !data ){
        return 'Error Fetching Data';
    }

    return (

        <>
            <Accordion defaultActiveKey="0">
                {Object.keys(data).slice(0, 20).map((countryKey) => {
                    const country: Country = data[countryKey];
                    return (
                        <Accordion.Item className="mb-2" eventKey={country.id + ''} key={country.id}>
                            <Accordion.Header>
                                <span className="circle-logo mx-2">
                                    <img src={country.flag} alt="" />
                                </span>
                                <p>{country.name}</p>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <ul className="p-1 accordion-list">
                                    {country.leagues.map((league) => (
                                        <li key={league.id} className="d-flex align-items-center px-1 py-3">
                                            <span className="circle-logo mx-2">
                                                <img src={league.logo} alt="" />
                                            </span>
                                            <p>{league.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </>
    )
}
