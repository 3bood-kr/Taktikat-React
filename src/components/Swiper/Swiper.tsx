import React from 'react'
import { Swiper as SwiperJS, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import image from '../../assets/images/about-card.png'
import './Swiper.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Swiper() {

    return (
        <>
            <div className='slider-container p-0 w-100'>
                <button className='slider-btn-prev' onClick={() => useSwiper().slideNext()}>
                    <IoIosArrowBack color='white' size={20} />
                </button>
                <button className='slider-btn-next'>
                    <IoIosArrowForward color='white' size={20} />
                </button>
                <SwiperJS loop={true} style={{ background: 'red', width: '100%' }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.slider-btn-next',
                        prevEl: '.slider-btn-prev',
                      }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='swiper-image-box positon-relative'>
                            <img src={image} alt="" style={{ width: '100%', height: 370, objectFit: 'cover' }} />
                            <div className='swiper-slide-overlay'>
                                hahaha
                            </div>
                        </div>    
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-image-box positon-relative'>
                            <img src={image} alt="" style={{ width: '100%', height: 370, objectFit: 'cover' }} />
                            <div className='swiper-slide-overlay'>
                                loll
                            </div>
                        </div>    
                    </SwiperSlide>
                </SwiperJS>
            </div>
        </>
    )
}
