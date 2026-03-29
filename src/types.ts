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
  imageUrl: string;
}

export interface CartItem extends Painting {
  quantity: number;
}
