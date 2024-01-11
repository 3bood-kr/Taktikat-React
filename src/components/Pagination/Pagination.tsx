import React from 'react'
import { Links, Meta } from '../../pages/CaricaturesPage/CaricaturesPage'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from './Pagination.module.css'
interface Props {
    links: Links,
    meta: Meta,
    setPage: (page: number) => void
}
const getPageNumberFromURL = (apiUrl: string) => {
    if (apiUrl === '') return 0
    const url = new URL(apiUrl);
    const pageNumber = url.searchParams.get("page");
    return Number(pageNumber);
}
export default function Pagination({ links, meta, setPage }: Props) {
    const handlePage = (page: number) => {
        if(page === 0) return
        setPage(page)
    }
    return (
        <>
            <div className=''>
                <div className={`${styles.pag_item_container} d-flex align-items-center justify-content-center gap-2 mb-2`}>

                    {
                        meta.links.map(({ url, label, active }) => {
                            if(!isNaN(Number(label))){
                                return <button className={active ? `${styles.active}` : ''} onClick={() => handlePage(Number(label))}>{label}</button>
                            }
                            if(label == '...'){
                                return label
                            }
                        })
                    }

                </div>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className={styles.button} disabled={!links.prev} onClick={() => handlePage(getPageNumberFromURL(links.prev?? ''))}>
                        <FaArrowLeft size={15} color='#fff' />
                    </button>
                    <button className={styles.button} disabled={!links.next} onClick={() => handlePage(getPageNumberFromURL(links.next?? ''))}>
                        <FaArrowRight size={15} color='#fff' />
                    </button>
                </div>
            </div>
        </>
    )
}
