import Card from './cards';

function Servico (props) {
    return (
        <section id='servicos' className='bg-gray-100 border-y h-full bg-cover bg-center relative'
        style={{ 
            backgroundImage: `url('/bg-service.jpg')`,
            backgroundAttachment: "fixed",
        }}>
            <div className='flex flex-col text-center justify-center py-8 '>
                <h2 className='text-5xl'>Nossos serviços</h2>
                <p className='pt-7 text-2xl'>Orçamento gratuito</p>
                <p className='text-2xl'>Atendemos a domicílio</p>
            </div>
            <div className={`${props.darkTheme ? 'bg-custom-bg-color' : 'bg-gray-50'} 
            text-center flex flex-col justify-center sm:flex-row`}>

                <Card darkTheme={props.darkTheme}             
                titulo="Vidros comuns e temperados"
                paragrafo="Oferecemos uma grande variedade de vidros comuns e temperados para muros, sacadas, janelas e demais estruturas." />

                <Card darkTheme={props.darkTheme}             
                titulo="Box para banheiro"
                paragrafo="Garanta segurança e praticidade no seu banheiro com os nossos box de vidro feitos sob medida." />

                <Card darkTheme={props.darkTheme}             
                titulo="Esquadrias de alumínio"
                paragrafo="Temos as melhores opções em esquadrias de alumínio para que seu projeto tenha um acabamento perfeito." />
            </div>
            <div className='h-12 w-full bg-cover bg-center relative filter grayscale blur-md contrast-200'
                style={{ 
                backgroundImage: `url('/bg-service.jpg')`,
                backgroundAttachment: "fixed",
                }}>
            </div>
        </section>
    )
}

export default Servico;