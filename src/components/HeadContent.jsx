import Head from "next/head";

const HeadContent = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="public/favicon.ico" />

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Marco Agüero" />

      {/* Etiquetas para mejorar la visibilidad en los motores de búsqueda */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Etiquetas para definir la estructura de tu página */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="www.nandev.xyz" />
      {/* <meta property="og:image" content="https://i.imgur.com/oSJUapb.png" /> */}
      <meta property="og:image:alt" content="Nandev ~ Web Developer" />

      {/* Etiquetas adicionales para SEO */}
      <link rel="canonical" href="https://www.nandev.xyz/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default HeadContent;
