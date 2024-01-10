import React from 'react'
import styles from './DownloadAppCard.module.css'
import download_image from '../../assets/images/download-img.png'
import play_img from '../../assets/images/google-play.png'
import appgallery_img from '../../assets/images/appgallery.png'
import appstore_img from '../../assets/images/app-store.png'

export default function DownloadAppCard() {
    return (
        <article className={`${styles.purple_card} d-flex`}>
            <div className={`${styles.download_img}`}>
                <img src={download_image}/>
            </div>
            <div className='p-4 d-flex flex-column justify-content-between'>
                <h2 className={`${styles.ad_title}`}>Try New <br/> Experience </h2>
                <div>
                    <p className={`${styles.download_now} pb-3`}>Download The App Now</p>
                    <div className={` ${styles.stores_container} d-flex justify-content-center gap-3`}>
                        <img src={appstore_img} alt="" />
                        <img src={play_img} alt="" />
                        <img src={appgallery_img} alt="" />
                    </div>
                </div>
            </div>
        </article>
    )
}
