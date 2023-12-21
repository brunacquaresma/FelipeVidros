import Image from 'next/image';

import Wpp from '/public/wpp.png';
import Email from '/public/email.png';
import Fb from '/public/fb.webp';

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
                    <iframe className="w-full mt-7 p-1 sm:p-0"
                        title='Localização'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.54542049252!2d-52.19087809999999!3d-32.081541699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119a762ec0333f%3A0xa8b751aac1b792ab!2sAv.%20Belo%20Brum%2C%202477%20-%20Vila%20Santa%20Rosa%2C%20Rio%20Grande%20-%20RS%2C%2096214-360!5e0!3m2!1spt-BR!2sbr!4v1701996799937!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: '8px' }}  // Correção: Use um objeto para a propriedade style
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Contato;