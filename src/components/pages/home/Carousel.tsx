import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import images from 'data';
import React from 'react';
// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import ContainerCarousel from './ContainerCarousel';

const Carousel = () => {
  return (
    <div className="h-screen flex items-center">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="h-4/6">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ContainerCarousel image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
