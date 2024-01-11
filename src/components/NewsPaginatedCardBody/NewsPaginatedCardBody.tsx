import React, { useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import SectionLayout from '../../layouts/SectionLayout'
import AsideLayout from '../../layouts/AsideLayout'
import WhiteCard from '../WhiteCard'
import { useQuery } from '@tanstack/react-query'
import { newItem } from '../NewsCardBody/NewsCardBody'
import { Links, Meta } from '../../pages/CaricaturesPage/CaricaturesPage'
import { fetchPaginatedNews } from '../../fetchers/News'
import Loader from '../Loader'
import MainCard from '../MainCard'

export interface NewsResponse {
    status: number;
    code: number;
    locale: string;
    message: string;
    data: newItem[];
    links: Links;
    meta: Meta;
}
interface Props{
    page: number
    setPaginationData: (data: {meta: Meta, links: Links}) => void
}
export default function NewsPaginatedCardBody({page, setPaginationData}: Props) {
    const { data, isLoading, isError, isSuccess } = useQuery<NewsResponse>({
        queryKey: ['news', page],
        queryFn: () => fetchPaginatedNews(page)
    })

    useEffect(() => {
        if (isSuccess) {
            setPaginationData({ meta: data.meta, links: data.links });
        }
    }, [isSuccess, setPaginationData, data]);

    if (isLoading) {
        return <Loader size={20} />
    }

    if(isError || !data?.data){
        return 'Error Fetching Carictures'
    }
    return (
        <>
            {
                data.data.map((item, index) => (
                    <MainCard
                        col={3}
                        link={`/news/${item.slug}`}
                        title={item.title}
                        date={item.created_at}
                        image={item.image}></MainCard>
                ))
            }
        </>
    )
}
