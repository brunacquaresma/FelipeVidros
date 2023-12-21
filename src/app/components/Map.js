function Map () {
    return (
        <iframe className="w-full mt-7 p-1 sm:p-0"
        title='Localização'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.54542049252!2d-52.19087809999999!3d-32.081541699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119a762ec0333f%3A0xa8b751aac1b792ab!2sAv.%20Belo%20Brum%2C%202477%20-%20Vila%20Santa%20Rosa%2C%20Rio%20Grande%20-%20RS%2C%2096214-360!5e0!3m2!1spt-BR!2sbr!4v1701996799937!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: '8px' }}  // Correção: Use um objeto para a propriedade style
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    )
}

export default memo(Map);