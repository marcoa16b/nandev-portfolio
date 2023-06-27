import Head from "next/head";

const HeadContent = () => {
  return (
    <Head>
      <title>NanDev ~ Servicios de diseño y desarrollo web</title>
      <link rel="icon" href="public/favicon.ico" />

      <meta
        name="description"
        content="Diseño web y desarrollo excepcionales: Descubre cómo puedo ayudarte a crear una presencia en línea impresionante y funcional con mis habilidades en diseño web y desarrollo frontend."
      />
      <meta
        name="keywords"
        content="desarrollo web, diseño web, ui, ux, next js, react js, javascript, desarrollo, webdev, programacion, pagina web, negocios, emprendimientos, empresas"
      />
      <meta name="author" content="Marco Agüero" />

      {/* Etiquetas para mejorar la visibilidad en los motores de búsqueda */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Etiquetas para definir la estructura de tu página */}
      <meta
        property="og:title"
        content="NanDev ~ Servicios de diseño y desarrollo web"
      />
      <meta
        property="og:description"
        content="Diseño web y desarrollo excepcionales: Descubre cómo puedo ayudarte a crear una presencia en línea impresionante y funcional con mis habilidades en diseño web y desarrollo frontend."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="www.nandev.xyz" />
      <meta property="og:image" content="https://i.imgur.com/oSJUapb.png" />
      <meta property="og:image:alt" content="Nandev - Web development" />

      {/* Etiquetas adicionales para SEO */}
      <link rel="canonical" href="https://www.nandev.xyz/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default HeadContent;
