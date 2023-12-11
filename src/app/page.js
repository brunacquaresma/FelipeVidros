"use client"

import Header from './components/header';
import Sobre from './components/sobre';
import Banner from './components/banner';
import Servico from './components/servicos'
import Contato from './components/contato'
import Footer from './components/footer';

import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false);

  const atualizarTema = () => {
      setDarkTheme(!darkTheme);
  }
  return (
    <>
      <main>
        <Header atualizarTema={atualizarTema} darkTheme={darkTheme} />
        <button className='fixed bottom-7 right-10 h-24 w-14 sm:h-32 sm:w-20'>
          <Link href="https://wa.me/5553991531637" target="_blank" rel="noopener noreferrer">
            <img src='/wpp.png' />
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
