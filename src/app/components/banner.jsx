import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/swiper-bundle.css';
import'swiper/css';
import'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'
import Portas from '/public/slides/portas.png';
import Boxes from '/public/slides/boxes.png';
import Sacadas from '/public/slides/sacadas.png';
import Emuito from '/public/slides/emuito.png';

function Banner (props) {
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