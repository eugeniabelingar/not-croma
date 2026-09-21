export interface Proyecto {
  id: string;
  imagen: string;
  titulo: string;
  ubicacion: string;
  año: string;
  descripcion: string;
  estado?: string;
}

export const PROYECTOS: Proyecto[] = [
  {
    id: 'residencia-belgrano',
    imagen: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    titulo: 'Residencia Belgrano',
    ubicacion: 'Buenos Aires',
    año: '2025',
    descripcion: 'Pieza de gran formato en diálogo con planos de hormigón visto y carpinterías de roble natural, aportando calidez táctil y serenidad al salón principal.',
    estado: 'En colección privada'
  },
  {
    id: 'penthouse-alvear',
    imagen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    titulo: 'Penthouse Alvear',
    ubicacion: 'Recoleta · Buenos Aires',
    año: '2025',
    descripcion: 'Díptico vertical con veladuras minerales emplazado en el vestíbulo de doble altura, explorando el contraste entre la solidez de la cal y la ingravidez de la sombra.',
    estado: 'En colección privada'
  },
  {
    id: 'casa-golf-nordelta',
    imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    titulo: 'Casa Golf Nordelta',
    ubicacion: 'Tigre · Buenos Aires',
    año: '2024',
    descripcion: 'Serie matérica con pigmentos orgánicos y cuarzo fino, comisionada para acompañar la continuidad espacial entre la galería exterior y el living con vistas al agua.',
    estado: 'En colección privada'
  },
  {
    id: 'estudio-libertador',
    imagen: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    titulo: 'Estudio Libertador',
    ubicacion: 'Palermo · Buenos Aires',
    año: '2024',
    descripcion: 'Intervención de textura mineral en tonos crudos para un estudio de arquitectura contemporáneo, diseñada para reaccionar a la luz rasante del atardecer.',
    estado: 'Instalación permanente'
  }
];
