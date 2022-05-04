import React from 'react'
import "./gallery.css"
import Card from "./Card"
import dataList, { dataType } from './data'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Gallery = () => {
  return (
		<section id="gallery">
			<h5>Projects GIF</h5>
			<h2>Gallery</h2>

			<Swiper
				className="container gallery__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{dataList.map((data: dataType, index: number) => (
					<SwiperSlide key={index}>
						<Card data={data}/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Gallery