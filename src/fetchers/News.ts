import axios from "axios"
import { newItem } from "../components/NewsCardBody/NewsCardBody";
import { NewsResponse } from "../components/NewsPaginatedCardBody/NewsPaginatedCardBody";
export const fetchMainNews = async () : Promise<newItem[]> => {
    console.log('Fetching News')
    const { data } = await axios.get('https://api.taktikat.app/api/web/v2/news/main?limit=4');
    return data.data; 
}

export const fetchPaginatedNews = async (page: number) : Promise<NewsResponse> => {
    console.log('Fetching News')
    const params = {
        per_page: 12,
        page: page
    }
    const { data } = await axios.get('https://api.taktikat.app/api/web/v2/news/latest', {params});
    return data; 
}

export const fetchNewsBySlug = async (slug?: string) => {
    console.log('Fetching News')
    const { data } = await axios.get(`https://api.taktikat.app/api/web/v2/news/${slug}`);
    return data.data; 
}