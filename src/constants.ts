import { Painting, Artist } from './types';
import crisAlzualdeImg from './cris_alzualde_1.png';

// Control de visibilidad de la sección Proyectos (cambiar a true para volver a mostrarla en el sitio)
export const SHOW_PROJECTS = false;

export const PAINTINGS: Painting[] = [
  {
    id: '1',
    title: 'Costa Azul',
    artist: 'Allier Art Studio',
    price: 5200,
    description: 'Su contraste botánico en turquesa sobre fondo negro es el game changer ideal para diseñadores de interiores y arquitectos que buscan elevar sus espacios con personalidad: el equilibrio justo entre modernidad y sofisticación.',
    dimensions: '1200 x 1200',
    medium: 'Acrílico sobre tela',
    year: '2025',
    category: 'Florales',
    isSigned: false,
    authenticity: 'Certificado de autenticidad (obra no firmada)',
    isSold: true,
    customCtaText: 'CONSULTAR POR OBRAS SIMILARES',
    privateCollectionNote: 'Colección privada: Obra adquirida de forma exclusiva para un proyecto de arquitectura e interiorismo en el barrio Costa Esmeralda (Buenos Aires, 2025).',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1788866391/Costa_Azul_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866391/Costa_Azul_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866436/Costa_Azul_image_2.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866430/Costa_Azul_image_3.png'
    ]
  },
  {
    id: '2',
    title: 'Oro Rosa',
    artist: 'Allier Art Studio',
    price: 4800,
    description: 'Su juego de contrastes —entre la profundidad del borgoña y el shock del rosa vibrante— crea un punto focal irresistible, perfecto para espacios que buscan romper el molde con personalidad y un toque de arte conceptual pero accesible.',
    dimensions: '70 x 90 cm',
    medium: 'Acrílico sobre tela',
    year: '2025',
    category: 'Abstracto',
    isSigned: false,
    authenticity: 'Incluye certificado de autenticidad',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1789075036/Oro_Rosa_image1.jpg',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1789075036/Oro_Rosa_image1.jpg',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Oro_Rosa_image_3.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Oro_Rosa_image_2.png'
    ]
  },
  {
    id: '5',
    title: 'Florescencia tardía',
    artist: 'Allier Art Studio',
    price: 5200,
    description: 'Una pieza que funciona como un respiro visual, aportando una calma sofisticada. El dinamismo de sus trazos expresivos y sus tintes borgoña sobre una base neutra y matérica crean el equilibrio justo para proyectos de arquitectura y diseño que buscan serenidad con carácter contemporáneo.',
    dimensions: '1000 x 1000',
    medium: 'Acrílico sobre tela',
    year: '2026',
    category: 'Abstracto',
    isSigned: false,
    authenticity: 'Incluye certificado de autenticidad (obra no firmada)',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1789074212/Florescencia_tardi%CC%81a_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1789074212/Florescencia_tardi%CC%81a_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1789074212/Florescencia_tardi%CC%81a_image_2.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1789074229/Florescencia_tardi%CC%81a_image_3.png'
    ]
  },
  {
    id: '3',
    title: 'Cauce Azul',
    artist: 'Allier Art Studio',
    price: 4800,
    description: 'La fluidez de los bloques turquesa y azul piedra sobre el blanco crea un equilibrio visual perfecto, ideal para espacios que buscan serenidad y un toque de diseño minimalista con mucha clase.',
    dimensions: '70 x 90 cm',
    medium: 'Acrílico sobre tela',
    year: '2026',
    category: 'Abstracto',
    isSigned: false,
    authenticity: 'Certificado de autenticidad (obra no firmada)',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Cauce_azul_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Cauce_azul_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866895/Cauce_azul_image_2.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Cauce_azul_image_3.png'
    ]
  },
  {
    id: '6',
    title: 'Savia',
    artist: 'Allier Art Studio',
    price: 5200,
    description: 'Una obra con vitalidad y movimiento. Sus aguadas fluidas en tonos borgoña, coral y ocre aportan una calidez sofisticada, siendo el acento contemporáneo perfecto para elevar proyectos de arquitectura y diseño de interiores con mucha personalidad.',
    dimensions: '1000 x 1000',
    medium: 'Acrílico sobre tela',
    year: '2026',
    category: 'Abstracto',
    categories: ['Abstracto', 'Florales'],
    isSigned: false,
    authenticity: 'Incluye certificado de autenticidad',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1792931894/Savia_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792931894/Savia_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792931887/Savia_image_2.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792931893/Savia_image_3.png'
    ]
  },
  {
    id: '7',
    title: 'Marea Cálida',
    artist: 'Allier Art Studio',
    price: 4900,
    description: 'Una pieza abstracta de composición geométrica y elegante. Ideal para acompañar proyectos modernos y limpios que buscan aportar fuerza y personalidad al espacio. Con una paleta de colores vibrantes —donde el naranja asume el protagonismo absoluto—, esta obra se convierte en un acento visual rotundo para el diseño de interiores y la decoración contemporánea.',
    dimensions: '120 x 90 cm',
    medium: 'Acrílico sobre tela',
    year: '2026',
    category: 'Abstracto',
    isSigned: false,
    authenticity: 'Incluye certificado de autenticidad',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1792931683/Marea_ca%CC%81lida_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792931683/Marea_ca%CC%81lida_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792931683/Marea_ca%CC%81lida_image_2.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792931683/Marea_ca%CC%81lida_image_3.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792931683/Marea_ca%CC%81lida_image_4.png'
    ]
  },
  {
    id: '8',
    title: 'Ella Azul',
    artist: 'Cris Alzualde',
    price: 6400,
    description: 'Retrato figurativo contemporáneo. Obra de autor de la artista Cris Alzualde realizada en acrílico y grafito sobre tela con trazos expresivos y profunda sensibilidad visual. Se entrega con certificado de autenticidad emitido y firmado por la artista.',
    dimensions: '110 x 80 cm',
    medium: 'Acrílico y grafito sobre tela',
    year: '2019',
    category: 'Artistas',
    isSigned: true,
    authenticity: 'Certificado de autenticidad de artista Cris Alzualde',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1792932987/Ella_Azul_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792932987/Ella_Azul_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1792932988/Ella_Azul_image_3.png'
    ]
  },
  {
    id: '9',
    title: 'Costa del bosque',
    artist: 'Allier Art Studio',
    price: 5200,
    description: 'Una obra de impronta orgánica y contemplativa que evoca los ritmos silenciosos de la naturaleza costera y boscosa. Sus texturas sutiles y delicadas transiciones tonales invitan al reposo visual, convirtiéndose en una pieza protagónica y serena para proyectos contemporáneos de arquitectura e interiorismo.',
    dimensions: '1000 x 1000',
    medium: 'Acrílico sobre tela',
    year: '2026',
    category: 'Abstracto',
    categories: ['Abstracto', 'Florales'],
    isSigned: false,
    authenticity: 'Incluye certificado de autenticidad',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1793047956/Costa_del_bosque_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1793047956/Costa_del_bosque_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1793047960/Costa_del_bosque_image_2.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1793047959/Costa_del_bosque_image_3.png'
    ]
  },
  {
    id: '10',
    title: 'Brocato',
    artist: 'Cris Alzualde',
    price: 6800,
    description: 'Retrato figurativo contemporáneo. Obra de autor de la artista Cris Alzualde realizada en acrílico y grafito sobre tela con trazos expresivos y profunda sensibilidad visual. Se entrega con certificado de autenticidad emitido y firmado por la artista.',
    dimensions: '150 x 100 cm',
    medium: 'Acrílico y grafito sobre tela',
    year: '2025',
    category: 'Artistas',
    isSigned: true,
    authenticity: 'Certificado de autenticidad de artista Cris Alzualde',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1793054412/Brocato_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1793054412/Brocato_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1793054414/Brocato_image_2.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1793054415/Brocato_image_3.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1793054417/Brocato_image_4.png'
    ]
  },
  {
    id: '11',
    title: 'Granate Latente',
    artist: 'Allier Art Studio',
    price: 5200,
    description: 'Una obra abstracta donde la intensidad del tono granate y sus texturas orgánicas dialogan con la arquitectura del espacio. Diseñada para generar una atmósfera envolvente, sofisticada y con carácter propio en proyectos contemporáneos de interiorismo.',
    dimensions: '80 x 100 cm',
    medium: 'Acrílico sobre tela',
    year: '2025',
    category: 'Abstracto',
    isSigned: false,
    authenticity: 'Incluye certificado de autenticidad',
    isSold: true,
    customCtaText: 'CONSULTAR POR OBRAS SIMILARES',
    privateCollectionNote: 'Colección privada: Obra adquirida de forma exclusiva para un proyecto de arquitectura e interiorismo en el barrio Costa Esmeralda (Buenos Aires, 2025).',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1793056964/Granate_latente_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1793056964/Granate_latente_image_1.png'
    ]
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'cris-alzualde',
    name: 'Cris Alzualde',
    avatarUrl: crisAlzualdeImg,
    bio: 'Artista contemporánea convocada por Allier Art Studio. Sus obras se caracterizan por una expresiva paleta y texturas que dotan a cada pieza de un carácter único e inconfundible.'
  }
];

export const FAQS = [
  {
    question: '¿Cómo realizo la adquisición de una obra?',
    answer: 'Es simple. Elegís la pieza que conecte con vos y hacés clic en "Consultar sobre esta obra" o nos escribís directamente por correo o WhatsApp. Nos pondremos en contacto personalizado para brindarte asesoramiento, cotización y coordinar la entrega.'
  },
  /*
  {
    question: '¿Realizan envíos?',
    answer: 'Sí, llegamos a cualquier rincón de Argentina. Nos encargamos de que el embalaje sea el ideal para que la obra viaje segura y llegue impecable a tu puerta. Coordinamos el envío y los tiempos de entrega directamente con vos.'
  },
  */
  {
    question: '¿Cómo sé que mi obra es original?',
    answer: 'Cada pieza en Allier Art Studio es única. Por eso, todas nuestras obras se entregan con un certificado de autenticidad firmado, que garantiza su origen y el valor de la autoría. Comprás arte real, con el respaldo real del artista.'
  },
  {
    question: '¿Se puede ver la obra antes de comprar?',
    answer: 'Creemos que el arte se siente mejor en vivo. Si estás en Buenos Aires, podemos coordinar una visita privada a tu domicilio para que veas la textura y los colores de cerca. Escribinos por WhatsApp o mail y reservamos un momento para vos.'
  }
];
