function Footer (props) {
    return (
        <footer className={`${props.darkTheme ? 'bg-custom-bg-color' : 'bg-gray-50'}
        text-center leading-loose py-3 border-t`}>
            <div className={`${props.darkTheme ? 'text-gray-50' : 'text-black'}`}>
                <p>
                © 2023 Felipe Vidros e Esquadrias. Todos os direitos reservados.
                </p>
                <p>
                CNPJ: 49.572.759/0001-38
                </p>
            </div>
        </footer>
    )
}

export default Footer;