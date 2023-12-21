import Image from 'next/image';
import React, { lazy, Suspense } from 'react';

import Wpp from '/public/wpp.png';
import Email from '/public/email.png';
import Fb from '/public/fb.webp';

const Map = lazy(() => import ('../components/Map'));

function Contato (props) {
    return (
        <section id="contato" className={`${props.darkTheme ? 'bg-custom-bg-color' : 'bg-gray-50'} h-full`}>
            <div className={`${props.darkTheme ? 'text-gray-50' : 'text-black'} 
            flex flex-col md:flex-row justify-evenly`}>

                <nav className={`${props.darkTheme ? 'bg-custom-bg-color' : 'bg-gray-100'}
                h-full flex flex-col justify-center p-6 rounded mt-20 m-2`}>
                    <div className='items-center'>
                        <h3 className="text-3xl px-4 pb-8">Contato</h3>
                        <li className="flex p-4 m-auto sm:m-0 text-left">
                            <Image className="h-8 w-8" src={Wpp} alt="Whatsapp" />
                            <p className="text-lg  px-1 pt-1">(53)99153-1637</p>
                        </li>
                    </div>
                    <ul className='items-center'>
                        <li className="flex p-4 m-auto sm:m-0">
                            <Image className="h-8 w-8" src={Email} alt="Email" />
                            <p className="text-lg px-1 pt-1">felipeevidros@hotmail.com</p>
                        </li>
                    </ul>
                    <ul className='items-center'>
                        <li className="flex p-4 m-auto sm:m-0">
                            <Image className="h-8 w-8" src={Fb} alt="Facebook" />
                            <p className="text-lg px-1 pt-1">felipevidroseesquadrias</p>
                        </li>
                    </ul>
                    <ul>
                        <li className="text-center pt-9">
                            <h3 className="text-3xl px-4 pb-8">Horário de atendimento</h3>
                            <p className='text-lg'>Das <span className="font-bold">9:00</span> às <span className="font-bold">18:00</span></p>
                        </li>
                    </ul>
                </nav>
            <div>
            <div className="text-center leading-loose py-7 p-2">
                <h3 className="text-3xl px-4 pb-7">Endereço</h3>
                <p>Av. Belo Brum, 2477 - Vila Santa Rosa, Rio Grande - RS. CEP: 96214-360</p>
                <Suspense fallback={<div>Carregando mapa...</div>}>
                <Map />
                </Suspense>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Contato;