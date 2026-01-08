import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import AddToCartModal from './AddToCartModal';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = (productData) => {
        addToCart(productData, productData.type, productData.days || 0);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
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
                        {product.rentPrice && (
                            <div className="absolute top-3 left-3 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Rent Available
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
                            <div className="text-lg font-semibold text-slate-900">
                                Buy: ₹{product.buyPrice}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                            {product.rentPrice && (
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="flex-1"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsModalOpen(true);
                                    }}
                                >
                                    Rent
                                </Button>
                            )}
                            <Button
                                variant="primary"
                                size="sm"
                                className="flex-1"
                                icon={ShoppingCart}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsModalOpen(true);
                                }}
                            >
                                Buy
                            </Button>
                        </div>
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
