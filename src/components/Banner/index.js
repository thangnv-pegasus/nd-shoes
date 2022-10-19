import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import data from '../../data/db.json'
import styles from './Banner.module.scss'
import classNames from "classnames/bind";

const banners = data.banner

const cx = classNames.bind(styles)

export default function App() {
    return (
        <>
            <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation]}
                className="mySwiper"

            >
                {
                    banners.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={cx()}>
                                <div className={cx('full-width')}>
                                    <img src={item} />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
