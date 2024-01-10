import Script from 'next/script'
import './globals.css'
import { Kanit } from 'next/font/google';

export const metadata = {
  title: 'Felipe Vidros',
  description:
  "A vidraçaria FELIPE VIDROS E ESQUADRIAS é uma empresa especializada em instalação de vidros comuns, vidros temperados e esquadrias na cidade de Rio Grande, RS.",
  keywords: 'vidros, esquadrias, janelas, portas de vidro, teto de vidro, muro de vidro',
  icons:{
    icon:['/favicon.ico?v=4'],
  },
  ogImage: '/loja.webp'
}

const mainFontFamily = Kanit({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></Script>

      </head>
      <body className={mainFontFamily.className}>{children}</body>
    </html>
  )
}
