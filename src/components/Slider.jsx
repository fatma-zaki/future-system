// import Swiper core and required modulesimport { Navigation, Pagination} from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from './../assets/dahua.jpg'
import img2 from './../assets/proxy-image (6).jpg'
import img3 from './../assets/smarthome.jpg'
import img4 from './../assets/ssss.jpg'

export default () => {
  return (

    <Swiper
      // install Swiper modules
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide><img className='slideimg' src={img1}/></SwiperSlide>
      <SwiperSlide><img className='slideimg' src={img2}/></SwiperSlide>
      <SwiperSlide><img className='slideimg' src={img3}/></SwiperSlide>
      <SwiperSlide><img className='slideimg' src={img4}/></SwiperSlide>
      ...
    </Swiper>
  );
};