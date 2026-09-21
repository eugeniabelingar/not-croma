import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import Cart from './pages/Cart';
import JoinUs from './pages/JoinUs';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import { AnimatePresence } from 'motion/react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coleccion" element={<Catalog />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/sumate" element={<JoinUs />} />
                <Route path="/contacto" element={<JoinUs />} />
                <Route path="/sobre-nosotros" element={<AboutUs />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
