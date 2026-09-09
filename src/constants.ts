import { Painting, Artist } from './types';
import crisAlzualdeImg from './cris_alzualde_1.png';
import crisAlzualdeObraImg from './cris_alzualde_obra_1.png';

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
    authenticity: 'Certificado de autenticidad (obra no firmada)',
    imageUrl: 'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Oro_Rosa_image_1.png',
    images: [
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Oro_Rosa_image_1.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Oro_Rosa_image_2.png',
      'https://res.cloudinary.com/uswfskxs/image/upload/v1788866365/Oro_Rosa_image_3.png'
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
    id: '4',
    title: 'Ella Amarillo',
    artist: 'Cris Alzualde',
    price: 6200,
    description: 'Obra de autor de la artista contemporánea Cris Alzualde. Una pieza con carácter expresivo y cuidada textura, firmada de puño y letra por la artista en el frente y al dorso, entregada con certificado oficial de autenticidad.',
    dimensions: '80 x 100 cm',
    medium: 'Técnica mixta sobre lienzo',
    year: '2026',
    category: 'Artistas',
    isSigned: true,
    authenticity: 'Obra firmada por Cris Alzualde + Certificado de autenticidad',
    imageUrl: crisAlzualdeObraImg,
    images: [crisAlzualdeObraImg, crisAlzualdeImg]
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
  {
    question: '¿Realizan envíos?',
    answer: 'Sí, llegamos a cualquier rincón de Argentina. Nos encargamos de que el embalaje sea el ideal para que la obra viaje segura y llegue impecable a tu puerta. Coordinamos el envío y los tiempos de entrega directamente con vos.'
  },
  {
    question: '¿Cómo sé que mi obra es original?',
    answer: 'Cada pieza en Allier Art Studio es única. Por eso, todas nuestras obras se entregan con un certificado de autenticidad firmado, que garantiza su origen y el valor de la autoría. Comprás arte real, con el respaldo real del artista.'
  },
  {
    question: '¿Se puede ver la obra antes de comprar?',
    answer: 'Creemos que el arte se siente mejor en vivo. Si estás en Buenos Aires, podemos coordinar una visita privada a tu domicilio para que veas la textura y los colores de cerca. Escribinos por WhatsApp o mail y reservamos un momento para vos.'
  }
];
