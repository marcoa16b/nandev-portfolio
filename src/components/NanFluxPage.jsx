import HeadContent from "./HeadContent";
import { NanFluxLogo, Phone, Page, World } from "../../public/assets/Nanflux";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const NanFluxPage = () => {
  return (
    <>
      <HeadContent />

      <main className="bg-[#060316] text-[#fff] min-h-screen font-primary">
        <div className="w-[90%] md:w-[80%] m-auto">
          <nav className="py-5 flex items-center justify-between">
            <figure className="w-[70px] sm:w-[120px]">
              <Image
                src={NanFluxLogo}
                alt="NanFlux solutions logo"
                width={170}
                height={112}
                className=""
              />
            </figure>
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold text-gradient font-secondary">
                NanFlux Solutions
              </a>
            </Link>
          </nav>

          <section>
            <h1 className="font-secondary py-10 text-[26px] sm:text-[36px] md:text-[46px] lg:text-[60px] font-bold text-center">
              Diseño/desarrollo web con especialidad en{" "}
              <span className="text-gradient">funnel design</span>.
            </h1>

            <p className="text-[#666A74] text-center text-sm sm:text-[18px] md:text-[22px] lg:text-[32px] leading-[122%]">
              Ayudo a pequeñas y medianas empresas y emprendedores a aumentar
              sus ventas y potenciar su negocio!
            </p>

            <Link href="#" legacyBehavior>
              <a className="flex items-center justify-center sm:text-2xl sm:w-[60%] m-auto py-4 my-8 bg-[#06962E] rounded-xl">
                <FaWhatsapp className="sm:text-4xl" /> &nbsp; ¿Quieres más
                información?
              </a>
            </Link>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center">
            <div className="bg-gradient-to-r from-[#8424B5] to-[#2CFFC6] max-w-[350px] p-4 text-black text-center rounded-xl">
              <h2 className="font-bold sm:text-lg md:text-xl">Diseño web</h2>
              <p className="text-sm sm:text-base md:text-lg">
                Diseño y desarrollo sitios web con hermosos y modernos diseños
                que captan la atención de los clientes.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#8424B5] to-[#2CFFC6] max-w-[350px] p-4 text-black text-center rounded-xl">
              <h2 className="font-bold sm:text-lg md:text-xl">Marketing</h2>
              <p className="text-sm sm:text-base md:text-lg">
                Ofrezco servicios de marketing para impulsar tu negocio en el
                mundo del internet.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#8424B5] to-[#2CFFC6] max-w-[350px] p-4 text-black text-center rounded-xl">
              <h2 className="font-bold sm:text-lg md:text-xl">
                Diseño de funnels
              </h2>
              <p className="text-sm sm:text-base md:text-lg">
                Diseño funnels ganadores que potencian tus ventas en línea,
                maximizando tus ganancias con productos físicos o digitales.
              </p>
            </div>
          </section>

          <section className="py-5">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center font-secondary my-5">
              Me especializo en <span className="text-gradient">-y amo-</span>{" "}
              crear hermosos embudos y sitios web centrados en el usuario.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
              <figure>
                <Image
                  src={Phone}
                  alt="Nanflux imagen de diseño responsivo"
                  width={470}
                  height={470}
                />
              </figure>
              <div className="text-center md:text-left max-w-[470px]">
                <h2 className="text-gradient text-xl font-bold">
                  Diseño responsivo
                </h2>
                <p className="">
                  El 80% de todo el tráfico proviene de dispositivos móviles. Es
                  importante que su sitio sea tan bueno en dispositivos móviles
                  como en computadoras de escritorio.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
              <figure className="md:col-start-2">
                <Image
                  src={Page}
                  alt="Nanflux imagen de diseño de calidad"
                  width={470}
                  height={470}
                />
              </figure>
              <div className="text-center md:text-left md:col-start-1 md:row-start-1 max-w-[470px]">
                <h2 className="text-gradient text-xl font-bold">
                  Diseño que habla por si mismo
                </h2>
                <p className="">
                  Creo en la importancia de diseños impactantes. Mi pasión es
                  crear experiencias de usuario optimizadas y visualmente
                  hermosas, que cautiven a tu audiencia y generen resultados
                  comerciales excepcionales.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
              <figure className="">
                <Image
                  src={World}
                  alt="Nanflux imagen de diseño de calidad"
                  width={470}
                  height={470}
                />
              </figure>
              <div className="text-center md:text-left max-w-[470px]">
                <h2 className="text-gradient text-xl font-bold">
                  Diseño de clase mundial
                </h2>
                <p className="">
                  Ofrezco un diseño de clase mundial aplicando prácticas de
                  diseño probadas y comprobadas, en línea con las últimas
                  tendencias de la industria.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center font-secondary my-5">
              Mira algunos de nuestros trabajos mas recientes
            </h1>
          </section>
        </div>
      </main>
    </>
  );
};

export default NanFluxPage;
