import React from 'react'
import { Accordion } from 'react-bootstrap'
import './MatchesCardBody.css'
import { useQuery } from '@tanstack/react-query';
import { fetchMatchesByDate } from '../../fetchers/Matches';
import Loader from '../Loader';
import { format } from 'date-fns';
interface Team {
    id: number;
    name: string;
    logo: string;
    home_color: string;
    away_color: string;
}


interface Match {
    id: number;
    home_team: Team;
    away_team: Team;
    home_score: string | null;
    away_score: string | null;
    match_type: string;
    status_value: string;
    date: string;
    time: string;
    is_live: boolean;
}

export interface Data {
    league_id: number;
    league: string;
    league_image: string;
    matches: Match[];
}

export default function MatchesCardBody() {
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const { data, isLoading, isError } = useQuery<Data[]>(
        {
            queryKey: ['matches'],
            queryFn: () => fetchMatchesByDate(currentDate),
        }
    );
    if (isLoading) {
        return <Loader size={20} />
    };

    if (isError || !data) {
        return 'Error Fetching Matches'
    }
    return (
        <>

            <Accordion className='matches-accordion' defaultActiveKey="0">
                {
                    data.map((leauge, index) => (
                        <Accordion.Item className='mb-3' eventKey={leauge.league_id + ''} key={leauge.league_id}>
                            <Accordion.Header>
                                <span className="circle-logo mx-2">
                                    <img src={leauge.league_image} alt="" />
                                </span>
                                {leauge.league}
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    {
                                        leauge.matches.map((match, index) => (
                                            <li key={match.id} className="row">
                                                <div className="col-4 d-flex align-items-center">
                                                    <p>{match.home_team.name}</p>
                                                    <span className="circle-logo mx-2">
                                                        <img src={match.home_team.logo} alt="" />
                                                    </span>
                                                </div>
                                                <div className="col-4">
                                                    <p className='status'>{ match.status_value }</p>
                                                </div>
                                                <div className=" col-4 d-flex align-items-center">
                                                    <span className="circle-logo mx-2">
                                                        <img src={match.away_team.logo} alt="" />
                                                    </span>
                                                    <p>{match.away_team.name}</p>
                                                </div>
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
    );
}
