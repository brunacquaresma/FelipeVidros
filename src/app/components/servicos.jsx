import Card from './cards';

function Servico (props) {
    return (
        <section id='servicos' className='bg-gray-100 border-y'>
            <div className='flex flex-col text-center justify-center py-8'>
                <h2 className='text-4xl'>Nossos serviços</h2>
                <p className='pt-7 text-lg'>Orçamento gratuito</p>
                <p className='text-lg'>Atendemos a domicílio!</p>

            </div>
            <div className={`${props.darkTheme ? 'bg-custom-bg-color' : 'bg-gray-50'} 
            text-center flex flex-col sm:flex-row`}>

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
        </section>
    )
}

export default Servico;