import React from 'react'
import { Accordion } from 'react-bootstrap'
import './MatchesCardBody.css'
import { useQuery } from '@tanstack/react-query';
import { fetchMatchesByDate } from '../../fetchers/Matches';
import Loader from '../Loader';

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
  status: string;
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
  const { data, isLoading, isError } = useQuery<Data[]>(
    {
      queryKey: ['matches'],
      queryFn: () => fetchMatchesByDate('2024-1-10'),
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
            <Accordion.Item className='mb-3' eventKey="0">
              <Accordion.Header>{leauge.league}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {
                    leauge.matches.map((match, index) => (
                      <li>{match.away_team.name}</li>
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
