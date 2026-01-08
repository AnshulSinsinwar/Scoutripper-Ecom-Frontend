import { useState, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { products } from '../data/products';

const ProductListing = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [sortBy, setSortBy] = useState('popularity');
    const [filters, setFilters] = useState({
        categories: [],
        difficulty: [],
        weather: [],
        inStock: null,
        priceRange: { min: 0, max: 5000 },
        days: { from: 0, to: 30 },
    });

    const [filteredProducts, setFilteredProducts] = useState(products);

    // Apply filters whenever filters change
    useEffect(() => {
        let result = [...products];

        // Filter by category
        if (filters.categories.length > 0) {
            result = result.filter((product) =>
                filters.categories.some((cat) =>
                    product.category.toLowerCase().includes(cat.toLowerCase())
                )
            );
        }

        // Filter by difficulty
        if (filters.difficulty.length > 0) {
            result = result.filter((product) =>
                product.difficulty?.some((d) => filters.difficulty.includes(d))
            );
        }

        // Filter by weather
        if (filters.weather.length > 0) {
            result = result.filter((product) =>
                product.weather?.some((w) => filters.weather.includes(w))
            );
        }

        // Filter by availability
        if (filters.inStock !== null) {
            result = result.filter((product) => product.inStock === filters.inStock);
        }

        // Filter by price range
        result = result.filter(
            (product) =>
                (product.rentPrice >= filters.priceRange.min &&
                    product.rentPrice <= filters.priceRange.max) ||
                (product.buyPrice >= filters.priceRange.min &&
                    product.buyPrice <= filters.priceRange.max)
        );

        // Sort products
        if (sortBy === 'price-low') {
            result.sort((a, b) => (a.rentPrice || a.buyPrice) - (b.rentPrice || b.buyPrice));
        } else if (sortBy === 'price-high') {
            result.sort((a, b) => (b.rentPrice || b.buyPrice) - (a.rentPrice || a.buyPrice));
        } else if (sortBy === 'rating') {
            result.sort((a, b) => b.rating - a.rating);
        }

        setFilteredProducts(result);
    }, [filters, sortBy]);

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Products' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-6 bg-slate-50">
            <div className="container">
                <Breadcrumb items={breadcrumbItems} />

                <div className="mt-6 mb-8">
                    <h1 className="text-4xl font-bold mb-2">Trekking Gear</h1>
                    <p className="text-slate-600">
                        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
                    </p>
                </div>

                <div className="flex gap-8">
                    {/* Desktop Filters */}
                    <div className="hidden lg:block w-80 flex-shrink-0">
                        <FilterSidebar
                            isOpen={true}
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>

                    {/* Products */}
                    <div className="flex-1">
                        {/* Sort & Mobile Filter */}
                        <div className="flex items-center justify-between mb-6">
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-100"
                            >
                                <SlidersHorizontal className="w-4 h-4" />
                                Filters
                            </button>

                            <div className="flex items-center gap-2 ml-auto">
                                <label className="text-sm text-slate-600">Sort by:</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    <option value="popularity">Most Popular</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>
                        </div>

                        {/* Product Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-xl text-slate-500 mb-4">No products found</p>
                                <p className="text-slate-400">Try adjusting your filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Sidebar */}
            <FilterSidebar
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                filters={filters}
                setFilters={setFilters}
            />
        </div>
    );
};

export default ProductListing;
