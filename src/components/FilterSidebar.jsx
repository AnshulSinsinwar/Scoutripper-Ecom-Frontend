import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterSidebar = ({ isOpen, onClose, filters, setFilters }) => {
    const categories = ['All', 'Footwear', 'Jackets', 'Backpacks', 'Accessories', 'Sleeping Gear'];
    const difficulties = ['Easy', 'Moderate', 'Difficult', 'Pro'];
    const weatherTypes = ['Snow', 'Rain', 'Cold', 'Dry'];
    const availability = ['In Stock', 'Out of Stock'];

    const handleCategoryChange = (category) => {
        if (category === 'All') {
            setFilters({ ...filters, categories: [] });
        } else {
            const newCategories = filters.categories.includes(category)
                ? filters.categories.filter((c) => c !== category)
                : [...filters.categories, category];
            setFilters({ ...filters, categories: newCategories });
        }
    };

    const handleDifficultyChange = (difficulty) => {
        const newDifficulties = filters.difficulty.includes(difficulty)
            ? filters.difficulty.filter((d) => d !== difficulty)
            : [...filters.difficulty, difficulty];
        setFilters({ ...filters, difficulty: newDifficulties });
    };

    const handleWeatherChange = (weather) => {
        const newWeather = filters.weather.includes(weather)
            ? filters.weather.filter((w) => w !== weather)
            : [...filters.weather, weather];
        setFilters({ ...filters, weather: newWeather });
    };

    const handleAvailabilityChange = (status) => {
        const value = status === 'In Stock';
        setFilters({ ...filters, inStock: value });
    };

    const handlePriceChange = (field, value) => {
        setFilters({
            ...filters,
            priceRange: {
                ...filters.priceRange,
                [field]: parseInt(value) || 0,
            },
        });
    };

    const handleDaysChange = (field, value) => {
        setFilters({
            ...filters,
            days: {
                ...filters.days,
                [field]: parseInt(value) || 0,
            },
        });
    };

    return (
        <>
            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.div
                initial={false}
                animate={isOpen ? { x: 0 } : { x: '-100%' }}
                className="fixed lg:static inset-y-0 left-0 w-80 bg-white border-r overflow-y-auto z-50 lg:z-0 lg:translate-x-0"
            >
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b lg:hidden">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-lg"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4 space-y-6">
                    {/* Category */}
                    <div>
                        <h3 className="font-semibold text-base mb-3">Category</h3>
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <label
                                    key={category}
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        type="checkbox"
                                        checked={
                                            category === 'All'
                                                ? filters.categories.length === 0
                                                : filters.categories.includes(category)
                                        }
                                        onChange={() => handleCategoryChange(category)}
                                        className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                                    />
                                    <span className="text-sm text-slate-700 group-hover:text-slate-900">
                                        {category}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Trek Difficulty */}
                    <div className="border-t pt-6">
                        <h3 className="font-semibold text-base mb-3">Trek Difficulty</h3>
                        <div className="space-y-2">
                            {difficulties.map((difficulty) => (
                                <label
                                    key={difficulty}
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        type="checkbox"
                                        checked={filters.difficulty.includes(difficulty)}
                                        onChange={() => handleDifficultyChange(difficulty)}
                                        className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                                    />
                                    <span className="text-sm text-slate-700 group-hover:text-slate-900">
                                        {difficulty}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Weather */}
                    <div className="border-t pt-6">
                        <h3 className="font-semibold text-base mb-3">Weather</h3>
                        <div className="space-y-2">
                            {weatherTypes.map((weather) => (
                                <label
                                    key={weather}
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        type="checkbox"
                                        checked={filters.weather.includes(weather)}
                                        onChange={() => handleWeatherChange(weather)}
                                        className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                                    />
                                    <span className="text-sm text-slate-700 group-hover:text-slate-900">
                                        {weather}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="border-t pt-6">
                        <h3 className="font-semibold text-base mb-3">Availability</h3>
                        <div className="space-y-2">
                            {availability.map((status) => (
                                <label
                                    key={status}
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        type="checkbox"
                                        checked={
                                            status === 'In Stock'
                                                ? filters.inStock === true
                                                : filters.inStock === false
                                        }
                                        onChange={() => handleAvailabilityChange(status)}
                                        className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                                    />
                                    <span className="text-sm text-slate-700 group-hover:text-slate-900">
                                        {status}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="border-t pt-6">
                        <h3 className="font-semibold text-base mb-3">Price Range</h3>
                        <div className="space-y-3">
                            <input
                                type="range"
                                min="0"
                                max="5000"
                                value={filters.priceRange.max}
                                onChange={(e) => handlePriceChange('max', e.target.value)}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                            />
                            <div className="flex items-center justify-between text-sm text-slate-600">
                                <span>₹{filters.priceRange.min}</span>
                                <span>₹{filters.priceRange.max}</span>
                            </div>
                        </div>
                    </div>

                    {/* Days */}
                    <div className="border-t pt-6">
                        <h3 className="font-semibold text-base mb-3">Days</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-slate-600 mb-1">From</label>
                                <input
                                    type="number"
                                    placeholder="1"
                                    min="1"
                                    value={filters.days.from || ''}
                                    onChange={(e) => handleDaysChange('from', e.target.value)}
                                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-600 mb-1">To</label>
                                <input
                                    type="number"
                                    placeholder="30"
                                    min="1"
                                    value={filters.days.to || ''}
                                    onChange={(e) => handleDaysChange('to', e.target.value)}
                                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default FilterSidebar;
