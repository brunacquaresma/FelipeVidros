"use client"

import Header from './components/header';
import Sobre from './components/sobre';
import Banner from './components/banner';
import Servico from './components/servicos'
import Contato from './components/contato'
import Footer from './components/footer';
import Wpp from '/public/wpp.png';

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react';

import { register } from 'swiper/element/bundle';
register();

export default function Page() {

  const [darkTheme, setDarkTheme] = useState(false);

  const atualizarTema = () => {
      setDarkTheme(!darkTheme);
  }
  return (
    <>
      <main>
        <Header atualizarTema={atualizarTema} darkTheme={darkTheme} />
        <button className='fixed bottom-7 right-7'>
          <Link href="https://wa.me/5553991531637" target="_blank" rel="noopener noreferrer">
            <Image
              src={Wpp} alt='caminhoWhatspp'
              width={56} height={76}
            />
          </Link>
        </button>
        <Banner atualizarTema={atualizarTema} darkTheme={darkTheme} />
        <Sobre atualizarTema={atualizarTema} darkTheme={darkTheme} />
        <Servico atualizarTema={atualizarTema} darkTheme={darkTheme} />
        <Contato atualizarTema={atualizarTema} darkTheme={darkTheme} />
        <Footer atualizarTema={atualizarTema} darkTheme={darkTheme} />
      </main>
    </>
  )
}
