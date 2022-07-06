import React from 'react'
import "./testimonials.css"
import Testimonial from "./Testimonial"
import dataList, { dataType } from './data'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
		<section id="testimonials">
			<h5>Review from client</h5>
			<h2>Testimonials</h2>

			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{dataList.map((data: dataType, index: number) => (
					<SwiperSlide key={index}>
						<Testimonial data={data}/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Testimonials