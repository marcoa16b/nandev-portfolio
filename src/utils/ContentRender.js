import { CardDesigner, CardDev, CardSeo, AboutImg, ContactImage } from "@/assets/images";

export const routes = [
  {
    name: 'Inicio',
    path: '/',
    target: '_self',
  },
  {
    name: 'Servicios',
    path: '/#services',
    target: '_self',
  },
  {
    name: 'Proyectos',
    path: '/#projects',
    target: '_self',
  },
  {
    name: 'Sobre mí',
    path: '/#about',
    target: '_self',
  },
  {
    name: 'Blog',
    path: 'https://nandev.hashnode.dev/',
    target: '_blank',
  }
]

export const portfolioData = [
  {
    name: 'EcoScape: Una aplicación web para explorar la naturaleza',
    description: 'Descubre la belleza del mundo natural con EcoScape. Esta aplicación web te permite explorar diferentes destinos ecológicos a través de una interfaz intuitiva y visualmente atractiva. Sumérgete en imágenes impresionantes, aprende sobre la biodiversidad y encuentra actividades sostenibles para disfrutar al aire libre. ¡Convierte tu pasión por la naturaleza en una experiencia digital única!',
    image: 'https://i.imgur.com/2sJ8u3h.jpg',
    projectUrl: 'https://github.com/'
  },
  {
    name: 'Foodify: Una plataforma para los amantes de la gastronomía',
    description: '¿Eres un apasionado de la comida? Foodify es la plataforma perfecta para descubrir nuevos sabores y experiencias culinarias. Este sitio web interactivo te permite explorar recetas deliciosas, leer reseñas de restaurantes y conectarte con chefs talentosos de todo el mundo. Con una interfaz elegante y funcionalidades innovadoras, Foodify hará que tu próximo viaje gastronómico sea inolvidable.',
    image: 'https://i.imgur.com/FfAXA2O.png',
    projectUrl: 'https://github.com/'
  },
  {
    name: 'FitBuddy: Tu compañero de fitness personalizado',
    description: '¡Ponte en forma con FitBuddy! Esta aplicación web revolucionaria te brinda un enfoque personalizado para alcanzar tus objetivos de fitness. Registra tu progreso, accede a rutinas de ejercicio adaptadas a tus necesidades y recibe consejos de expertos en tiempo real. Ya sea que estés buscando perder peso, tonificar tu cuerpo o mejorar tu resistencia, FitBuddy estará a tu lado en cada paso del camino.',
    image: 'https://i.imgur.com/ams24pX.jpg',
    projectUrl: 'https://github.com/'
  },
]

export const homeContent = {
  header: {
    title: 'Diseño y desarrollo web de alta calidad para tu negocio',
    description: 'Te ofrezco diseño y desarrollo web de alta calidad para impulsar tu presencia en línea y ayudarte a alcanzar tus objetivos. Trabajaré contigo para crear un sitio web elegante y fácil de usar, personalizado para tu negocio y tus necesidades.'
  },
  services: {
    title: 'Diseño y desarrollo web de alta calidad',
    description: 'Servicios de diseño y desarrollo web enfocados en la optimización de la experiencia del usuario, para que tus clientes disfruten de una experiencia en línea fluida y satisfactoria. Ofrecemos soluciones de diseño de interfaz y experiencia del usuario que te ayudan a diferenciarte de la competencia',
    design: {
      title: 'Diseño web a medida',
      description: 'Trabajamos contigo para crear un sitio web único que refleje tu marca y se adapte a tus necesidades y objetivos específicos',
      image: CardDesigner
    },
    development: {
      title: 'Desarrollo web de alta calidad',
      description: 'Nos encargamos de todo el proceso de desarrollo web, desde la planificación hasta el lanzamiento, para asegurarnos de que obtengas un sitio web funcional, seguro y eficiente',
      image: CardDev
    },
    seo: {
      title: 'Optimización de motores de búsqueda',
      description: 'Mejoramos el posicionamiento de tu sitio web en los resultados de búsqueda de Google y otros motores de búsqueda para que puedas alcanzar a tu público objetivo',
      image: CardSeo
    },
  },
  about: {
    title: 'Sobre mí',
    description: 'Soy un desarrollador frontend apasionado por diseño web y programación, combino estética visual con funcionalidad y usabilidad. Estudio Ingeniería en Informática, buscando nuevos conocimientos y desafíos en tecnología. Meta: mejorar y ofrecer proyectos innovadores a clientes.', 
    image: AboutImg,
    cvLink: 'https://drive.google.com/file/d/1DIpwry3zGW8cU6ZsztsGMkZAUXNglRhB/view?usp=share_link',
    tags: [
      {
        title: 'Edad: ',
        content: '21 años'
      },
      {
        title: 'Genero:',
        content: 'Masculino'
      },
      {
        title: 'Idiomas:',
        content: 'Español (nativo), Ingles (intermedio)'
      },
      {
        title: 'Trabajo:',
        content: 'Freelance Frontend Developer'
      },
    ],
    experience: [
      {
        title: '2+',
        content: 'Años de experiencia'
      },
      {
        title: '40+',
        content: 'Proyectos completados'
      },
      {
        title: '30+',
        content: 'Clientes satisfechos'
      },
    ]
  },
  contact: {
    title: '¿Quieres contratar mis servicios?',
    description: 'Puedes contactarme por medio de mis redes sociales',
    image: ContactImage
  }
}