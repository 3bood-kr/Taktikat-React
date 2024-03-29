import axios from "axios"
import { AnalysisResponse } from "../components/CaricaturesPaginatedCardBody/CaricaturesPaginatedCardBody";
export const fetchAnalysis = async (type: 'video' | 'text' | 'caricature', limit: number) => {
    console.log('Fetching Main Analyisis')
    const params = {
        content_type: type,
        limit: limit
    }
    const { data } = await axios.get('https://api.taktikat.app/api/web/v2/analytics', {params});
    return data.data; 
}


export const fetchPaginatedAnalysis =  async (type: 'video' | 'text' | 'caricature', page: number, per_page = 12) : Promise<AnalysisResponse> => {
    console.log('Fetching Paginated Analyisis')
    const params = {
        content_type: type,
        per_page: per_page,
        page: page
    }
    const { data } = await axios.get('https://api.taktikat.app/api/web/v2/analytics', {params});
    console.log(data.data)
    return data; 
}