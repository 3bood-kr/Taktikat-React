import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import WhiteCard from '../WhiteCard';
import image from '../../assets/images/download-img.png'
import { CiSearch } from 'react-icons/ci';
import './SarchModal.css'
import { useQueries, useQuery } from '@tanstack/react-query';
import useDebounce from '../../hooks/useDebounce';
import { fetchNewsBySearch } from '../../fetchers/News';
import Loader from '../Loader';
import { Link } from 'react-router-dom';


export default function SearchModal() {
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue);



    // const [newsSearch, setNewsSearch] = useState();

    // const [
    //     news,
    // ] = useQueries({
    //     queries: [
    //         {
    //             queryKey: ['news', 'hell'],
    //             queryFn: () => fetch('video', 2),
    //           },
    //         ]
    //     }
    // });

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content p-2">
                        <div className="modal-body">
                            <div className="text-end mb-3">
                                <button type="button" className="close" data-bs-dismiss="modal">
                                    <IoIosCloseCircle color='#7B33A7' size={25} />
                                </button>
                            </div>
                            <div className="d-flex align-items-center search-input mb-4">
                                <div className='px-4'>
                                    <CiSearch size={20} color='#7B33A7' />
                                </div>
                                <div className="w-100">
                                    <input
                                        className='w-100'
                                        type="text"
                                        placeholder='Search'
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        value={searchValue} />
                                </div>
                            </div>
                            <ModalBody searchValue={debouncedSearchValue} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface SearchResult {
    id: number;
    slug: string;
    title: string;
    image: string;
    home_team_image?: string;
    away_team_image?: string;
    status: string;
    type: string;
    start_at?: string;
}

interface SearchResponse {
    news: SearchResult[];
    analytics: SearchResult[];
}

interface ModalBodyProps {
    searchValue: string,
}
function ModalBody({ searchValue }: ModalBodyProps) {
    const [news, setNews] = useState();
    const [analysis, setAnalysis] = useState();

    const { data, isLoading, isSuccess, isError } = useQuery<SearchResponse>({
        enabled: !!searchValue,
        queryKey: ['test', searchValue],
        queryFn: () => fetchNewsBySearch(searchValue)
    })


    if (isLoading) {
        return <Loader size={20} />
    }
    console.log(data)


    return (
        <>
            <div className="row">
                <div className="col-6">
                    {
                        data?.news && <WhiteCard heading='News'>
                            <div className="white-card-body p-1">
                                <ul className='search-list'>
                                    {
                                        data?.news.map((item, index) => (
                                            <li className='d-flex align-items-center py-2'>
                                                <Link to={`/news/${item.slug}`} className='circle-logo me-3'>
                                                    <img src={item.image} />
                                                </Link>
                                                <Link to={`/news/${item.slug}`}>{item.title.length > 70 ? item.title.substring(0, 50) + '...' : item.title}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </WhiteCard>
                    }
                </div>
                <div className="col-6">
                    {
                        data?.analytics && <WhiteCard heading='Analysis'>
                        <div className="white-card-body p-1">
                            <ul className='search-list'>
                                {
                                    data?.analytics.map((item, index) => (
                                        <li className='d-flex align-items-center py-2'>
                                            <a href={`/analysis/${item.slug}`} className='circle-logo me-3'>
                                                <img src={item.image} />
                                            </a>
                                            <a href={`/analysis/${item.slug}`}>{item.title.length > 70 ? item.title.substring(0, 50) + '...' : item.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </WhiteCard>
                    }
                </div>
            </div>
        </>
    )
}