import React from 'react';
import { useEffect, useState } from 'react';

const ResultsList = ({ books }) => {
    return (
        <div className='container'>
            {console.log('ResultsList executing')}
            {books &&
                books.map((book) => {
                    return <li key={book.id}>{book.volumeInfo.title}</li>;
                })}
        </div>
    );
};

export default ResultsList;
