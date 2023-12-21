import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/swiper-bundle.css';
import'swiper/css';
import'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'
import Portas from '/public/slides/portas.webp';
import Boxes from '/public/slides/boxes.webp';
import Sacadas from '/public/slides/sacadas.webp';
import Emuito from '/public/slides/emuito.webp';

function Banner () {
    return (
        <>
            <div className='hidden sm:block border-t'>
                <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 3000
                }}
                modules={[Navigation, Autoplay, Pagination]} >
                    <SwiperSlide>
                        <div className="w-6xl flex justify-around rounded">
                            <Image 
                            src={Portas} alt="Slide de portas" 
                            />  
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-6xl flex justify-around rounded">
                            <Image 
                            src={Sacadas} alt="Slide de sacadas" 
                            />                        
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-6xl flex justify-around rounded">
                            <Image 
                            src={Boxes} alt="Slide de box de banheiro" 
                            />                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-6xl flex justify-around">
                        <Image 
                            src={Emuito} alt="Slide diversos" 
                            />                           
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Banner;