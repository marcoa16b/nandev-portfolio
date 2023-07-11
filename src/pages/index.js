import HeadContent from "../components/HeadContent";
import HomePage from "../components/home/HomePage";

export default function Home() {
  return (
    <>
      <HeadContent
        title={"NanDev ~ Servicios de diseño y desarrollo web"}
        description={
          "Diseño web y desarrollo excepcionales: Descubre cómo puedo ayudarte a crear una presencia en línea impresionante y funcional con mis habilidades en diseño web y desarrollo frontend."
        }
        keywords={
          "desarrollo web, diseño web, ui, ux, next js, react js, javascript, desarrollo, webdev, programacion, pagina web, negocios, emprendimientos, empresas"
        }
      />
      <HomePage />
    </>
  );
}
