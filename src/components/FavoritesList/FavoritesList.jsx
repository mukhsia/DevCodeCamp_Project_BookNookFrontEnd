import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesList = ({ favoriteBooks }) => {
    return (
        <div className='container'>
            <ul>
                {favoriteBooks &&
                    favoriteBooks.map((book, index) => {
                        return (
                            <Link
                                to={`/bookdetails/${book.bookId}`}
                                key={index}
                            >
                                <li>
                                    <img
                                        src={book.thumbnailUrl}
                                        alt='Book Thumbnail'
                                    />
                                    <p>{book.title}</p>
                                </li>
                            </Link>
                        );
                    })}
            </ul>
        </div>
    );
};

export default FavoritesList;
