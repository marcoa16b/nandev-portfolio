import Image from "next/image";
import Link from "next/link";
import {
  FaAngleLeft,
  FaAngleRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import {
  NanDevImg,
  ProfileImg,
  JivisImg,
  AIChatImg,
} from "../../../public/assets/images";
import { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import useScrollColor from "../../hooks/useScrollColor";
import BackgroundCircle from "../mouseCircle/BackgroundCircle";

const proyectList = [
  {
    title: "AIChatBot",
    description:
      "Un chat que se comunica con una IA por medio de una API, para generar una converzacion. Costruida para practicar la implementación de IAs en aplicaciones web, y la utilizacion de modelos de IA de HuggingFace.",
    image: AIChatImg,
    tags: ["Next.js", "Typescript", "Tailwindcss"],
    link: "https://aichat-khaki.vercel.app/",
    github: "https://github.com/nandev16/ia-chat",
  },
  {
    title: "Jivis - Control de empleados",
    description:
      "Una aplicación simple construida para llevar un control de los empleados de la empresa y los dias libres que tiene cada uno de ellos. El link adjunto lleva a una Demo que utiliza el almacenamiento del navegador para poder ver el funcionamiento general de la aplicación.",
    image: JivisImg,
    tags: ["React.js", "PWA", "MUI"],
    link: "https://app-jivis.vercel.app/",
    github: "https://github.com/nandev16/Jivis-SimplePWA",
  },
];

const articlesList = [
  {
    title: "El arte de dominar los React Hooks. Parte 2.",
    link: "https://blog.nandev.xyz/arte-de-dominar-los-react-hooks-parte2",
  },
  {
    title: "El arte de dominar los React Hooks. Parte 1.",
    link: "https://blog.nandev.xyz/arte-de-dominar-los-react-hooks-parte1",
  },
];

const HomePage = () => {
  const windowWidth = useWindowWidth();
  const activeSection = useScrollColor();

  const [navOpen, setNavOpen] = useState(true);

  return (
    <div className="text-white min-h-screen lg:flex">
      <BackgroundCircle />
      <aside
        className={`
        fixed bg-[#02010C] lg:bg-opacity-0 z-50 bg-opacity-80 backdrop-blur-sm h-screen top-0 left-0 p-[40px] duration-300
        ${navOpen ? "translate-x-0" : "-translate-x-[100%] lg:translate-x-0"}
        ${windowWidth >= 1024 ? "w-[30%]" : "w-[80%]"}
      `}
      >
        <figure className="w-[70%] max-w-[150px] xl:max-w-[200px] m-auto">
          <Image
            src={NanDevImg}
            alt="Nandev image"
            width={700}
            height={700}
            priority
          />
        </figure>
        <div className="h-[70%] flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#2CFFC6] my-4">
              Marco Agüero
            </h1>
            <h1 className="text-lg sm:text-xl xl:text-2xl my-2">
              Desarrollador web 👨‍💻
            </h1>
            <p className="text-sm sm:text-base xl:text-lg text-[#A2A3A4]">
              Desarrollo sitios web enfocados en el diseño y la experiencia de
              usuario.
            </p>
          </div>
          <div>
            <nav className="flex text-lg sm:text-xl xl:text-2xl flex-col my-5">
              <Link href="#about" legacyBehavior>
                <a
                  className={`
                    flex items-center duration-300 hover:text-[#2CFFC6] py-1
                    ${activeSection === "about" ? "text-[#2CFFC6]" : ""}
                  `}
                >
                  <span
                    className={`
                    h-[3px] bg-slate-400 mr-[10px] duration-300
                    ${
                      activeSection === "about"
                        ? "w-[60px] bg-[#2CFFC6]"
                        : "w-[30px]"
                    }
                  `}
                  ></span>
                  Sobre mí
                </a>
              </Link>
              <Link href="#projects" legacyBehavior>
                <a
                  className={`
                    flex items-center duration-300 hover:text-[#2CFFC6] py-1
                    ${activeSection === "projects" ? "text-[#2CFFC6]" : ""}
                  `}
                >
                  <span
                    className={`
                    h-[3px] bg-slate-400 mr-[10px] duration-300
                    ${
                      activeSection === "projects"
                        ? "w-[60px] bg-[#2CFFC6]"
                        : "w-[30px]"
                    }
                  `}
                  ></span>
                  Proyectos
                </a>
              </Link>
              <Link href="#articles" legacyBehavior>
                <a
                  className={`
                    flex items-center duration-300 hover:text-[#2CFFC6] py-1
                    ${activeSection === "articles" ? "text-[#2CFFC6]" : ""}
                  `}
                >
                  <span
                    className={`
                    h-[3px] bg-slate-400 mr-[10px] duration-300
                    ${
                      activeSection === "articles"
                        ? "w-[60px] bg-[#2CFFC6]"
                        : "w-[30px]"
                    }
                  `}
                  ></span>
                  Artículos
                </a>
              </Link>
            </nav>
          </div>
          <div className="w-full flex items-center justify-center">
            <Link href="https://github.com/nandev16" legacyBehavior>
              <a target="_blank" className="relative w-[50px] h-[50px] mx-3">
                <div className="absolute rounded-xl w-[50px] h-[50px] bg-[#2CFFC6]"></div>
                <div className="absolute rounded-lg text-3xl hover:-translate-x-1 hover:-translate-y-1 duration-300 flex items-center justify-center w-[48px] h-[48px] bg-[#05041B]">
                  <FaGithub />
                </div>
              </a>
            </Link>
            <Link href="https://www.instagram.com/nando._.dev/" legacyBehavior>
              <a target="_blank" className="relative w-[50px] h-[50px] mx-3">
                <div className="absolute rounded-xl w-[50px] h-[50px] bg-[#2CFFC6]"></div>
                <div className="absolute rounded-lg text-3xl hover:-translate-x-1 hover:-translate-y-1 duration-300 flex items-center justify-center w-[48px] h-[48px] bg-[#05041B]">
                  <FaInstagram />
                </div>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/marcoa16b/" legacyBehavior>
              <a target="_blank" className="relative w-[50px] h-[50px] mx-3">
                <div className="absolute rounded-xl w-[50px] h-[50px] bg-[#2CFFC6]"></div>
                <div className="absolute rounded-lg text-3xl hover:-translate-x-1 hover:-translate-y-1 duration-300 flex items-center justify-center w-[48px] h-[48px] bg-[#05041B]">
                  <FaLinkedin />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="absolute lg:hidden text-2xl cursor-pointer top-3 -right-10 w-10 h-10 bg-[#020216] flex items-center justify-center rounded-r-full"
        >
          {navOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </div>
      </aside>

      <div className="absolute top-0 right-0 w-full lg:w-[70%] px-[40px]">
        <section id="about" className="z-10 relative min-h-screen py-[40px]">
          <h1 className="text-2xl text-[#2CFFC6] mb-10">Sobre mí</h1>
          <div className="flex flex-col-reverse min-h-[calc(100vh-140px)] items-center md:grid md:grid-cols-2 md:items-center">
            <p className="text-sm md:text-base xl:text-lg text-center md:text-right pb-2 pt-5 md:pr-4">
              Actualmente, estoy cursando la carrera de Ingeniería en
              Informática en la Universidad virtual UNED de Costa Rica. <br />
              <br /> A lo largo de mi trayecto académico y profesional, he
              tenido la oportunidad de trabajar en diversos proyectos personales
              de desarrollo web. Estos proyectos me han brindado experiencia en
              el diseño y la implementación de soluciones web eficientes. <br />
              <br />
              Mi enfoque en el aprendizaje continuo me ha llevado a estar
              siempre en constante desarrollo personal y profesional sin parar
              de aprender un poco más todos los días. <br />
              <br /> Además de mi pasión por el desarrollo, también poseo
              habilidades en diseño gráfico y UX/UI, lo que me permite tener una
              perspectiva integral al momento de abordar proyectos.
            </p>
            <figure>
              <Image
                src={ProfileImg}
                alt="Imagen de perfil"
                width={380}
                height={545}
                className="rounded-lg"
              />
            </figure>
          </div>
        </section>

        <section id="projects" className="z-10 relative min-h-screen py-[40px]">
          <h1 className="text-2xl text-[#2CFFC6] mb-10">Mis Proyectos</h1>
          <div className="flex flex-col items-center">
            {proyectList.map((project) => (
              <div
                key={project.title}
                className="w-[90%] xl:w-[75%] bg-[#D9D9D9] p-10 bg-opacity-10 rounded-xl backdrop-blur-lg flex flex-col items-center mb-10"
              >
                <figure className="">
                  <Image
                    src={project.image}
                    alt="Imagen del proyecto"
                    width={350}
                    height={224}
                    priority
                  />
                </figure>
                <h2 className="w-full text-xl font-bold my-5">
                  {project.title}
                </h2>
                <p className="">{project.description}</p>
                <div className="flex flex-wrap my-5">
                  {project.tags.map((tag) => (
                    <p
                      className="px-4 py-2 text-sm bg-[#2CFFC6] bg-opacity-20 text-[#2CFFC6] rounded-full m-1"
                      key={tag}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="flex">
                  {project.link.length > 1 ? (
                    <Link href={project.link} legacyBehavior>
                      <a
                        target="_blank"
                        className="relative w-[50px] h-[50px] mx-3"
                      >
                        <div className="absolute rounded-xl w-[50px] h-[50px] bg-[#2CFFC6]"></div>
                        <div className="absolute rounded-lg text-3xl hover:-translate-x-1 hover:-translate-y-1 duration-300 flex items-center justify-center w-[48px] h-[48px] bg-[#05041B]">
                          <FiExternalLink />
                        </div>
                      </a>
                    </Link>
                  ) : (
                    <></>
                  )}
                  {project.github.length > 1 ? (
                    <Link href={project.github} legacyBehavior>
                      <a
                        target="_blank"
                        className="relative w-[50px] h-[50px] mx-3"
                      >
                        <div className="absolute rounded-xl w-[50px] h-[50px] bg-[#2CFFC6]"></div>
                        <div className="absolute rounded-lg text-3xl hover:-translate-x-1 hover:-translate-y-1 duration-300 flex items-center justify-center w-[48px] h-[48px] bg-[#05041B]">
                          <FaGithub />
                        </div>
                      </a>
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="articles"
          className="z-10 relative min-h-screen py-[40px] flex flex-col justify-between"
        >
          <h1 className="text-2xl text-[#2CFFC6] mb-10">
            Algunos de mis artículos recientes
          </h1>

          <div>
            <div className="flex flex-col">
              {articlesList.map((article, i) => (
                <Link key={i} href={article.link} legacyBehavior>
                  <a className="flex text-lg py-2 article-link items-center">
                    <span
                      className={`h-[3px] bg-white mr-[10px] duration-300 w-[30px]`}
                    ></span>
                    {article.title}
                  </a>
                </Link>
              ))}
            </div>

            <p className="text-xl mt-10">
              Visita{" "}
              <span>
                <Link href="https://blog.nandev.xyz/" legacyBehavior>
                  <a className="text-[#2CFFC6] hover:underline">mi blog</a>
                </Link>
              </span>{" "}
              para ver más
            </p>
          </div>

          <p className="text-center text-[#A2A3A4] pt-10">
            Web diseñada en Figma, construida con Next.js y tailwindcss y
            desplegada en Vercel por Marco Agüero.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
