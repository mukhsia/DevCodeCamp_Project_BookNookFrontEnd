import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesList = ({ favoriteBooks }) => {
    return (
        <div className="container d-flex align-items-start mb-4">
            <ul className="d-flex flex-column align-items-start">
                {favoriteBooks &&
                    favoriteBooks.map((book, index) => {
                        return (
                            <Link
                                to={`/bookdetails/${book.bookId}`}
                                key={index}
                            >
                                <li className="bookContainer d-flex flex-row align-items-center">
                                    <img
                                        src={book.thumbnailUrl}
                                        alt="Book Thumbnail"
                                        className="mb-2"
                                    />
                                    <p className="m-5">{book.title}</p>
                                </li>
                            </Link>
                        );
                    })}
            </ul>
        </div>
    );
};

export default FavoritesList;
