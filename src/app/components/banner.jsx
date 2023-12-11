import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/swiper-bundle.css';
import'swiper/css';
import'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Banner (props) {
    return (
        <>
            <div className='hidden sm:block'>
                <Swiper
                autoplay={{
                    delay: 3000
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    type: 'bullets'
                }}
                modules={[Navigation, Autoplay, Pagination]} >
                    <SwiperSlide>
                        <div className="w-6xl flex justify-around rounded">
                        <img className="w-6xl" src="/slides/portas.png" alt="Slides" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-6xl flex justify-around rounded">
                        <img className="w-6xl" src="/slides/sacadas.png" alt="Slides" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-6xl flex justify-around rounded">
                        <img className="w-6xl" src="/slides/boxes.png" alt="Slides" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-6xl flex justify-around">
                        <img className="w-6xl" src="/slides/emuito.png" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}