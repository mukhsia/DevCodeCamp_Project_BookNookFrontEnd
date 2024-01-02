import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsList from '../../components/ResultsList/ResultsList';

import { DATA } from '../../localData';

const SearchPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    return (
        <div className='container'>
            <SearchBar setBooks={setBooks} />
            <ResultsList books={books} />
        </div>
    );
};

export default SearchPage;
