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
  categories?: string[];
  isSigned?: boolean;
  authenticity?: string;
  imageUrl: string;
  images?: string[];
  isSold?: boolean;
  privateCollectionNote?: string;
  customCtaText?: string;
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
