"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/navigation'; // Import Swiper navigation styles

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/less/autoplay'; // Import Autoplay styles

import fastcompany from '../../Images/image-5@2x.png';
import techcrunch from "../../Images/image-6@2x.png";
import mit from "../../Images/image-7@2x.png";
import forbes from "../../Images/image-8@2x.png";
import Image from 'next/image';

// Initialize Swiper modules

export default function Gallery() {
    return (
        <div className="bg-gallery h-screen">
            <div className="flex flex-col items-center justify-center relative h-screen">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-sub-heading mb-4">
                    Gallery
                </h1>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="w-11/12 md:w-3/4 lg:w-2/3 h-3/4 relative p-0 m-0"
                    autoplay={true}
                >
                    <SwiperSlide className="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl bg-gallery text-white">
                        <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                            <Image src={fastcompany} alt="Fast Company" width={400} height={400} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl bg-gallery text-white">
                        <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                            <Image src={techcrunch} alt="techcrunch" width={400} height={400} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl bg-gallery text-white">
                        <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                            <Image src={mit} alt="MIT" width={400} height={400} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl bg-gallery text-white">
                        <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                            <Image src={forbes} alt="Forbes" width={400} height={400} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
