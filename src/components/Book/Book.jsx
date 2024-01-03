// General Imports
import React from 'react';
import './Book.css';

// Utility Library Import
import parse from 'html-react-parser';

const Book = ({ bookDetails, isFavorite, user, handleFavorite }) => {
    const btnClass = isFavorite ? 'btn btn-success' : 'btn btn-secondary';
    const btnLabel = isFavorite ? 'Favorited' : 'Favorite';

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
                        {user && (
                            <form onSubmit={handleFavorite}>
                                {' '}
                                <button
                                    type="submit"
                                    disabled={isFavorite}
                                    className={`${btnClass}`}
                                >
                                    {btnLabel}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <h2 className="mt-4 mb-2">{bookDetails.title}</h2>
                <h5 className="mb-4">{bookDetails.authors}</h5>
                <div>
                    {bookDetails.description && parse(bookDetails.description)}
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Book;
