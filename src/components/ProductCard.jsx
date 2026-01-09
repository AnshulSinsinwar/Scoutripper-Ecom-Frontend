import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import AddToCartModal from './AddToCartModal';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleFavorite, isFavorite } = useFavorites();
    const [showToast, setShowToast] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isProductFavorite = isFavorite(product.id);

    // Calculate discount percentage if originalPrice exists
    const hasOffer = product.originalPrice && product.originalPrice > product.buyPrice;
    const discountPercent = hasOffer
        ? Math.round(((product.originalPrice - product.buyPrice) / product.originalPrice) * 100)
        : 0;

    const handleAddToCart = (productData) => {
        addToCart(productData);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(product);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300'
                    }`}
            />
        ));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
        >
            <Link to={`/product/${product.id}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />

                        {/* Top right - Favorite Button */}
                        <div className="absolute top-3 right-3">
                            <button
                                onClick={handleFavoriteClick}
                                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md ${isProductFavorite
                                    ? 'bg-red-500 text-white'
                                    : 'bg-white/90 text-slate-600 hover:bg-white hover:text-red-500'
                                    }`}
                            >
                                <Heart className={`w-5 h-5 ${isProductFavorite ? 'fill-current' : ''}`} />
                            </button>
                        </div>

                        {/* Discount Badge */}
                        {hasOffer && (
                            <div
                                className="absolute top-3 left-3 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-md"
                                style={{ backgroundColor: '#4EC5C1' }}
                            >
                                SALE OFF {discountPercent}%
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-slate-900 mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors">
                            {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex gap-0.5">{renderStars(product.rating)}</div>
                            <span className="text-sm text-slate-600">
                                ({product.reviewCount})
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            {product.rentPrice && (
                                <div className="text-sm text-slate-600 mb-1">
                                    Rent: <span className="font-semibold text-primary-600">₹{product.rentPrice}/day</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-slate-900">
                                    ₹{product.buyPrice.toLocaleString()}
                                </span>
                                {hasOffer && (
                                    <>
                                        <span className="text-sm text-slate-400 line-through">
                                            ₹{product.originalPrice.toLocaleString()}
                                        </span>
                                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                            Save ₹{(product.originalPrice - product.buyPrice).toLocaleString()}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <Button
                            variant="primary"
                            size="sm"
                            className="w-full"
                            icon={ShoppingCart}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsModalOpen(true);
                            }}
                        >
                            Add
                        </Button>
                    </div>
                </div>
            </Link>

            {/* Add to Cart Modal */}
            <AddToCartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={product}
                onAddToCart={handleAddToCart}
            />

            {/* Toast Notification */}
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="fixed bottom-4 right-4 bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
                >
                    ✓ Added to cart!
                </motion.div>
            )}
        </motion.div>
    );
};

export default ProductCard;
