import { Painting } from './types';

export const PAINTINGS: Painting[] = [
  {
    id: '1',
    title: 'Costa Azul',
    artist: 'Elena Rodríguez',
    price: 5200,
    description: 'Una representación vibrante y orgánica de la flora costera. Los tonos turquesa y esmeralda sobre el fondo oscuro crean un contraste dramático que evoca la frescura del Mediterráneo.',
    dimensions: '100 x 120 cm',
    medium: 'Acrílico sobre lienzo',
    year: '2024',
    category: 'Figurativo',
    imageUrl: 'https://storage.googleapis.com/static.antigravity.dev/user-uploads/67e0499b-3814-4648-842c-f6735166299f/image.png'
  },
  {
    id: '2',
    title: 'Oro Rosa',
    artist: 'Elena Rodríguez',
    price: 6500,
    description: 'Una obra maestra de abstracción contemporánea que explora la tensión entre la sobriedad de los tonos tierra y la vitalidad del rosa y el carmín. Las capas de textura revelan una profundidad emocional única.',
    dimensions: '140 x 100 cm',
    medium: 'Óleo y espátula sobre lienzo',
    year: '2024',
    category: 'Abstracto',
    imageUrl: 'https://storage.googleapis.com/static.antigravity.dev/user-uploads/67e0499b-3814-4648-842c-f6735166299f/image_1.png'
  }
];

export const FAQS = [
  {
    question: '¿Cómo realizo una compra?',
    answer: 'Es simple. Elegís la pieza que conecte con vos, la sumás al carrito y seguís los pasos de pago. Una vez confirmada, nos ponemos en contacto con vos para coordinar el envío. Si necesitás algo más personalizado, siempre podés escribirnos.'
  },
  {
    question: '¿Realizan envíos?',
    answer: 'Sí, llegamos a cualquier rincón de Argentina. Nos encargamos de que el embalaje sea el ideal para que la obra viaje segura y llegue impecable a tu puerta. El costo se calcula al momento del checkout, pero si estás en AMBA, consultanos por opciones de entrega rápida.'
  },
  {
    question: '¿Cómo sé que mi obra es original?',
    answer: 'Cada pieza en not es única. Por eso, todas nuestras obras se entregan con un certificado de autenticidad firmado, que garantiza su origen y el valor de la autoría. Comprás arte real, con el respaldo real del artista.'
  },
  {
    question: '¿Se puede ver la obra antes de comprar?',
    answer: 'Creemos que el arte se siente mejor en vivo. Si estás en Buenos Aires, podemos coordinar una visita privada a tu domicilio para que veas la textura y los colores de cerca. Escribinos por WhatsApp o mail y reservamos un momento para vos.'
  }
];
