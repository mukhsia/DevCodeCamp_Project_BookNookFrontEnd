import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
        <div>
            <h1>Favorites</h1>
            <FavoritesList favoriteBooks={favoriteBooks} />
        </div>
    );
};

export default FavoritesPage;
