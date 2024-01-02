// General Imports
import React from 'react';
import { Link } from 'react-router-dom';

const ResultsList = ({ books }) => {
    return (
        <div>
            <ul className="d-flex justify-content-between flex-column align-items-start">
                {books &&
                    books.map((book, index) => {
                        return (
                            <Link
                                to={`/bookdetails/${book.id}`}
                                key={index}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                <li>{book.volumeInfo.title}</li>
                            </Link>
                        );
                    })}
            </ul>
        </div>
    );
};

export default ResultsList;
