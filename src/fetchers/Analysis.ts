import axios from "axios"
export const fetchAnalysis = async (type: 'video' | 'text', limit: number) => {
    console.log('Fetching Main Analyisis')
    const params = {
        content_type: type,
        limit: limit
    }
    const { data } = await axios.get('https://api.taktikat.app/api/web/v2/analytics?limit=2', {params});
    return data.data; 
}