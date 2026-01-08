import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import SizeGuide from './pages/SizeGuide';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CheckoutFlow from './pages/CheckoutFlow';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <CartProvider>
            <Router>
                <ScrollToTop />
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductListing />} />
                        <Route path="/rent" element={<ProductListing />} />
                        <Route path="/buy" element={<ProductListing />} />
                        <Route path="/trek-kits" element={<ProductListing />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/size-guide" element={<SizeGuide />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/checkout-flow" element={<CheckoutFlow />} />
                    </Routes>
                </main>
                <Footer />
            </Router >
        </CartProvider>
    );
}

export default App;
