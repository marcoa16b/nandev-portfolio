
import { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar'
import Header from '@/components/home/Header'
import Services from '@/components/home/Services'
import Portfolio from '@/components/home/Portfolio'
import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'
import About from '@/components/home/About'

import { portfolioData } from '../utils/ContentRender'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>NanDev ~ Servicios de diseño y desarrollo web</title>
        <link rel="icon" href="public/favicon.ico" />

        <meta name="description" content="Diseño web y desarrollo excepcionales: Descubre cómo puedo ayudarte a crear una presencia en línea impresionante y funcional con mis habilidades en diseño web y desarrollo frontend." />
        <meta name="keywords" content="desarrollo web, diseño web, ui, ux, next js, react js, javascript, desarrollo, webdev, programacion, pagina web, negocios, emprendimientos, empresas" />
        <meta name="author" content="Marco Agüero" />

        {/* Etiquetas para mejorar la visibilidad en los motores de búsqueda */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Etiquetas para definir la estructura de tu página */}
        <meta property="og:title" content="NanDev ~ Servicios de diseño y desarrollo web" />
        <meta property="og:description" content="Diseño web y desarrollo excepcionales: Descubre cómo puedo ayudarte a crear una presencia en línea impresionante y funcional con mis habilidades en diseño web y desarrollo frontend." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.nandev.xyz" />
        <meta property="og:image" content="https://i.imgur.com/oSJUapb.png" />
        <meta property="og:image:alt" content="Nandev - Web development" />

        {/* Etiquetas adicionales para SEO */}
        <link rel="canonical" href="https://www.nandev.xyz/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <main>
        <header>
          <Navbar />
          <Header />
        </header>

        {/* SERVICIOS */}
        <section id='services'>
          <Services />
        </section>


        {/* PROYECTOS */}
        <section id='projects'>
          <Portfolio data={portfolioData} />
        </section>
        

        {/* ABOUT */}
        <section id='about'>
          <About />
        </section>

        {/* CONTACT */}
        <section id='contacto'>
          <Contact />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  )
}
