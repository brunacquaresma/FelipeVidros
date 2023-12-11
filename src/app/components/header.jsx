import Link from 'next/link';
import Image from 'next/image';

function Header(props) {
    return (
        <header id="header" className={`${props.darkTheme ? 'bg-custom-bg-color' : 'bg-gray-50'} p-4`}>
            <nav>
                <ul className={`${props.darkTheme ? 'text-gray-100' : 'text-black'} 
                flex justify-around space-x-4 tracking-widest flex-wrap px-2 text-lg`}>
                    <li className="pt-1">
                        <Link href="#sobre">
                            Sobre
                        </Link>
                    </li>
                    <li className="pt-1">
                        <Link href="#servicos">
                            Nossos serviços
                        </Link>
                    </li>
                    <li className="pt-1">
                        <Link href="#contato">
                            Contato
                        </Link>
                    </li>
                    <button onClick={props.atualizarTema} >
                    <Image className={`${props.darkTheme ? 'border-gray-200' : 'border-gray-700'} 
                    h-9 border-2 rounded-full p-1`}
                    src={props.darkTheme ? "/sun.png" : "/moon.png"} alt="Tema escuro/Tema claro"
                    width={36} height={36}
                    />
                    </button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;