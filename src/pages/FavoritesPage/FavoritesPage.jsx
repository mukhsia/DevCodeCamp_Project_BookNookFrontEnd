// General Imports
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Hook Imports
import useAuth from '../../hooks/useAuth';

// Component Imports
import FavoritesList from '../../components/FavoritesList/FavoritesList';

const FavoritesPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();

    const [favoriteBooks, setFavoriteBooks] = useState();

    async function fetchFavorites() {
        try {
            const response = await axios.get(
                `https://localhost:5001/api/favorites`,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            );
            setFavoriteBooks(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <div className="container d-flex flex-column p-2">
            <h1 className="d-flex align-items-start mb-5">Your Favorites</h1>
            <FavoritesList
                favoriteBooks={favoriteBooks}
                fetchFavorites={fetchFavorites}
            />
        </div>
    );
};

export default FavoritesPage;
