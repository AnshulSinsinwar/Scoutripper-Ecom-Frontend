import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return context;
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        // Load favorites from localStorage on init
        const savedFavorites = localStorage.getItem('scoutripper_favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Save favorites to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('scoutripper_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (product) => {
        if (!favorites.some((fav) => fav.id === product.id)) {
            setFavorites([...favorites, product]);
        }
    };

    const removeFromFavorites = (productId) => {
        setFavorites(favorites.filter((fav) => fav.id !== productId));
    };

    const toggleFavorite = (product) => {
        if (isFavorite(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const isFavorite = (productId) => {
        return favorites.some((fav) => fav.id === productId);
    };

    const getFavoritesCount = () => {
        return favorites.length;
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                toggleFavorite,
                isFavorite,
                getFavoritesCount,
                clearFavorites,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
