import React from 'react';
import parse from 'html-react-parser';

const Book = ({ bookDetails, isFavorite, user, handleFavorite }) => {
    const btnClass = isFavorite ? 'btn btn-success' : 'btn btn-secondary';

    if (bookDetails) {
        return (
            <div className='bookDetails'>
                <img
                    src={bookDetails.imageLinks.smallThumbnail}
                    alt='Book cover'
                />
                {user ? (
                    <button
                        type='button'
                        className={btnClass}
                        onClick={handleFavorite}
                    >
                        Favorite
                    </button>
                ) : (
                    <div></div>
                )}
                <h2>{bookDetails.title}</h2>
                <h3>{bookDetails.authors}</h3>
                <div>{parse(bookDetails.description)}</div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Book;
