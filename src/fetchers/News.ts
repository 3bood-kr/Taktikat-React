import axios from "axios"
export const fetchMainNews = async () => {
    console.log('Fetching News')
    const { data } = await axios.get('https://api.taktikat.app/api/web/v2/news/main?limit=4');
    return data.data; 
}

export const fetchNewsBySlug = async (slug?: string) => {
    console.log('Fetching News')
    const { data } = await axios.get(`https://api.taktikat.app/api/web/v2/news/${slug}`);
    return data.data; 
}