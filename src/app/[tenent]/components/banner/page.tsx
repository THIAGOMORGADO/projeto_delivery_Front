import styles from './styles.module.css'
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export const Banner = () => {
    return (
        <div className={styles.container}>
            <Swiper
                loop={true}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide><img src='/tmp/banner1.png' alt=''/></SwiperSlide>
                <SwiperSlide><img src='/tmp/banner2.png' alt=''/></SwiperSlide>
                <SwiperSlide><img src='/tmp/banner1.png' alt=''/></SwiperSlide>
                <SwiperSlide><img src='/tmp/banner2.png' alt=''/></SwiperSlide>
            </Swiper>
        </div>
    )
}