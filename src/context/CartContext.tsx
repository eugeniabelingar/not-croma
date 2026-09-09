import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Painting } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (painting: Painting) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('allier_cart') || localStorage.getItem('notcroma_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('allier_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (painting: Painting) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === painting.id);
      if (existing) {
        return prev.map(item => 
          item.id === painting.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...painting, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
