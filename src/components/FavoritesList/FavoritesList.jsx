// General Imports
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Hook Imports
import useAuth from '../../hooks/useAuth';

const FavoritesList = ({ favoriteBooks, fetchFavorites }) => {
    const [user, token] = useAuth();

    async function deleteFavorite(favoriteId) {
        try {
            let response = await axios.delete(
                `https://localhost:5001/api/favorites/${favoriteId}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            );
            fetchFavorites();
        } catch (error) {
            console.warn('Error trying to delete favorite: ', error);
        }
    }

    return (
        <div className="container d-flex align-items-start mb-4">
            <ul className="d-flex flex-column align-items-start">
                {favoriteBooks &&
                    favoriteBooks.map((book, index) => {
                        return (
                            <div
                                className="bookContainer d-flex flex-row align-items-center"
                                key={index}
                            >
                                <Link to={`/bookdetails/${book.bookId}`}>
                                    <li className="bookContainer d-flex flex-row align-items-center">
                                        <img
                                            src={book.thumbnailUrl}
                                            alt="Book Thumbnail"
                                            className="bookImages mb-2"
                                        />
                                        <p className="m-5">{book.title}</p>
                                    </li>
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteFavorite(book.id)}
                                >
                                    Unfavorite
                                </button>
                            </div>
                        );
                    })}
            </ul>
        </div>
    );
};

export default FavoritesList;
