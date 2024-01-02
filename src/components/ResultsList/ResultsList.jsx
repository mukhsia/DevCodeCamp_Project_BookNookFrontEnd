import React from 'react';
import { Link } from 'react-router-dom';

const ResultsList = ({ books }) => {
    return (
        <div className='container'>
            <ul>
                {books &&
                    books.map((book, index) => {
                        return (
                            <Link to={`/bookdetails/${book.id}`} key={index}>
                                <li>{book.volumeInfo.title}</li>
                            </Link>
                        );
                    })}
            </ul>
        </div>
    );
};

export default ResultsList;
