import Image from 'next/image';
import Loja from '/public/loja.png'

function Sobre (props) {
    const emoji = String.fromCodePoint(0x1F91D)

    return (
        <section id="sobre" className={`${props.darkTheme ? 'bg-custom-bg-color' : 'bg-gray-50'} 
        flex flex-col sm:flex-row justify-center py-2 pt-7 sm:pt-0 items-center h-full`}>
            <div className="flex justify-center py-0 sm:py-12">
                <Image className='rounded'
                src={Loja} alt="Nossa loja"
                width={430} height={430}
                />
            </div>
            <div className={`${props.darkTheme ? 'text-gray-50' : 'text-black'} 
            px-10 pb-9 w-screen sm:w-1/2 text-center sm:text-start`}>
                <h1 className="text-4xl my-8">Sobre a empresa</h1>
                <p className="text-lg leading-loose">Há 14 anos no mercado, a <span className="font-bold">Felipe Vidros e Esquadrias</span> trabalha com obras de pequeno e grande porte, com alto padrão de qualidade e segurança. {emoji} </p>
            </div>
        </section>
    )
}

export default Sobre;