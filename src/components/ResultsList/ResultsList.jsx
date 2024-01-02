import React from 'react';
import { Link } from 'react-router-dom';

const ResultsList = ({ books }) => {
    return (
        <div className='container'>
            {console.log('ResultsList executing')}
            <ul>
                {books &&
                    books.map((book, index) => {
                        return (
                            <Link to={`/bookdetails/${book.id}`}>
                                <li key={index}>{book.volumeInfo.title}</li>
                            </Link>
                        );
                    })}
            </ul>
        </div>
    );
};

export default ResultsList;
