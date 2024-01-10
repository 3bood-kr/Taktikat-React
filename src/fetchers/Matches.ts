import axios from "axios";
import { Data } from "../components/MatchesCardBody/MatchesCardBody";

export const fetchMatchesByDate = async (date: string) : Promise<Data[]> => {
    console.log('Fetching Matches')
    const { data } = await axios.get(`https://api.taktikat.app/api/web/v2/matches?match_date=${date}`);
    return data.data; 
}

