import React from 'react';
import parse from 'html-react-parser';
import './Book.css';

const Book = ({ bookDetails, isFavorite, user, handleFavorite }) => {
    const btnClass = isFavorite ? 'btn btn-success' : 'btn btn-secondary';

    if (bookDetails) {
        return (
            <div className="bookDetails d-flex flex-column p-4 m-4">
                <div className="d-flex flex-row">
                    {' '}
                    {bookDetails.imageLinks ? (
                        <img
                            className="bookImages"
                            src={bookDetails.imageLinks.thumbnail}
                            alt="Book cover"
                        />
                    ) : (
                        <img
                            src="/images/noImage.jpg"
                            alt="Unavailable."
                            className="bookImages"
                        />
                    )}
                    <div className="m-2">
                        {user ? (
                            <button
                                type="button"
                                className={`${btnClass}`}
                                onClick={handleFavorite}
                            >
                                Favorite
                            </button>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>

                <h2 className="mt-4 mb-2">{bookDetails.title}</h2>
                <h5 className="mb-4">{bookDetails.authors}</h5>
                <div>{parse(bookDetails.description)}</div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Book;
