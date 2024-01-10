import axios from "axios"
import { Countries } from "../components/TopLeaugesCardBody/TopLeaugesCardBody";
export const fetchLeaguesByCountry = async () : Promise<Countries> => {
    console.log('Fetching Leauges By Country')
    const { data } = await axios.get('https://api.taktikat.app/api/web/v2/leagues/countries');
    return data.data; 
}