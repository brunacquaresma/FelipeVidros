function Card (props) {
    return (
        <div>
            <div className={`${props.darkTheme ? 'text-gray-50' : 'text-black'} 
            leading-loose p-9 border-4 hover:border-red-600`}>
                <h3 className="text-2xl">{props.titulo}</h3>
                <p className="pt-7 text-md">{props.paragrafo}</p>
                <div className={`${props.darkTheme ? 'text-black' && 'bold' : 'text-gray-100'}
                mt-7`}>
                </div>
            </div>
        </div>
    )
}

export default Card;