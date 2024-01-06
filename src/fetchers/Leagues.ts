import axios from "axios"
export const fetchLeaguesByCountry = async () => {
    console.log('Fetching Leauges By Country')
    const { data } = await axios.get('https://api.taktikat.app/api/web/v2/leagues/countries', {
        params: {
            _limit: 5
           }
    });
    console.log(data)
    return data.data; 
}