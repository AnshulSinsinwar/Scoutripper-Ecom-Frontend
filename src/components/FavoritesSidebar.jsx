import { X, Heart, Trash2, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import Button from './Button';

const FavoritesSidebar = ({ isOpen, onClose }) => {
    const { favorites, removeFromFavorites, clearFavorites } = useFavorites();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[420px] bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Heart className="w-6 h-6 text-red-500 fill-current" />
                                My Favorites
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Favorites Items - Scrollable */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {favorites.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Heart className="w-8 h-8 text-slate-400" />
                                    </div>
                                    <p className="text-slate-500 mb-4">No favorites yet</p>
                                    <Link to="/products" onClick={onClose}>
                                        <Button variant="outline" size="sm">
                                            Browse Products
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {favorites.map((product) => {
                                        const hasOffer = product.originalPrice && product.originalPrice > product.buyPrice;
                                        const discountPercent = hasOffer
                                            ? Math.round(((product.originalPrice - product.buyPrice) / product.originalPrice) * 100)
                                            : 0;

                                        return (
                                            <div key={product.id} className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                                <div className="flex gap-3">
                                                    <Link to={`/product/${product.id}`} onClick={onClose}>
                                                        <img
                                                            src={product.images[0]}
                                                            alt={product.name}
                                                            className="w-20 h-20 object-cover rounded-lg"
                                                        />
                                                    </Link>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <Link to={`/product/${product.id}`} onClick={onClose} className="flex-1">
                                                                <h4 className="font-semibold text-sm hover:text-teal-600 transition-colors line-clamp-2">
                                                                    {product.name}
                                                                </h4>
                                                            </Link>
                                                            <button
                                                                onClick={() => removeFromFavorites(product.id)}
                                                                className="p-1 hover:bg-red-50 hover:text-red-600 rounded transition-colors ml-2"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>

                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="font-bold text-slate-900">
                                                                ₹{product.buyPrice.toLocaleString()}
                                                            </span>
                                                            {hasOffer && (
                                                                <>
                                                                    <span className="text-xs text-slate-400 line-through">
                                                                        ₹{product.originalPrice.toLocaleString()}
                                                                    </span>
                                                                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                                                        {discountPercent}% off
                                                                    </span>
                                                                </>
                                                            )}
                                                        </div>

                                                        <Link to={`/product/${product.id}`} onClick={onClose}>
                                                            <button className="flex items-center gap-1.5 text-xs font-medium text-teal-600 hover:text-teal-700">
                                                                <ShoppingCart className="w-3.5 h-3.5" />
                                                                View Product
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {favorites.length > 0 && (
                            <div className="border-t p-6 bg-white">
                                <p className="text-sm text-slate-600 mb-4 text-center">
                                    {favorites.length} {favorites.length === 1 ? 'item' : 'items'} in your wishlist
                                </p>

                                <div className="flex gap-3">
                                    <Button
                                        onClick={clearFavorites}
                                        variant="outline"
                                        className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Clear All
                                    </Button>
                                    <Link to="/products" onClick={onClose} className="flex-1">
                                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                                            Shop More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default FavoritesSidebar;
