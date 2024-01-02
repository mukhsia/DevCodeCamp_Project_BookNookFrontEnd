import React from 'react';
import parse from 'html-react-parser';

const Book = ({ bookDetails }) => {
    return (
        <div className='bookDetails'>
            <img src={bookDetails.imageLinks.smallThumbnail} alt='Book cover' />
            <button>Favorite</button>
            <h2>{bookDetails.title}</h2>
            <h3>{bookDetails.authors}</h3>
            <div>{parse(bookDetails.description)}</div>
        </div>
    );
};

export default Book;
