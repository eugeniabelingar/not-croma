export interface Painting {
  id: string;
  title: string;
  artist: string;
  price: number;
  description: string;
  dimensions: string;
  medium: string;
  year: string;
  category: string;
  isSigned?: boolean;
  authenticity?: string;
  imageUrl: string;
  images?: string[];
}

export interface Artist {
  id: string;
  name: string;
  avatarUrl: string;
  bio?: string;
}

export interface CartItem extends Painting {
  quantity: number;
}
