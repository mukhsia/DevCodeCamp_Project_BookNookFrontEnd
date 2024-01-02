import React from 'react';
import { Link } from 'react-router-dom';

const ResultsList = ({ books }) => {
    return (
        <div className='container'>
            {console.log('ResultsList executing')}
            <ul>
                {books &&
                    books.map((book) => {
                        return (
                            <Link to={`/bookdetails/${book.id}`}>
                                <li key={book.id}>{book.volumeInfo.title}</li>
                            </Link>
                        );
                    })}
            </ul>
        </div>
    );
};

export default ResultsList;
