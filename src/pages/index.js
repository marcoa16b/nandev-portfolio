import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Header from "@/components/home/Header";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import About from "@/components/home/About";
import HeadContent from "../components/HeadContent";

import { portfolioData } from "../utils/ContentRender";
import Head from "next/head";
import NanFluxPage from "../components/NanFluxPage";
import HomePage from "../components/home/HomePage";

export default function Home() {
  return (
    <>
      <HeadContent />

      <HomePage />

      {/* <main> */}

      {/* <header>
          <Navbar />
          <Header />
        </header> */}

      {/* SERVICIOS */}
      {/* <section id="services">
          <Services />
        </section> */}

      {/* PROYECTOS */}
      {/* <section id="projects">
          <Portfolio data={portfolioData} />
        </section> */}

      {/* ABOUT */}
      {/* <section id="about">
          <About />
        </section> */}

      {/* CONTACT */}
      {/* <section id="contacto">
          <Contact />
        </section>

        <footer>
          <Footer />
        </footer> */}
      {/* </main> */}
    </>
  );
}
