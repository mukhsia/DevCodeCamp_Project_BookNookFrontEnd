// General Import
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Hook Imports
import useAuth from '../../hooks/useAuth';

// Component Imports
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsList from '../../components/ResultsList/ResultsList';

// LocalData Import
import { SEARCHDATA } from '../../localData';

const SearchPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    return (
        <div className="container">
            <SearchBar setBooks={setBooks} />
            <ResultsList books={books} />
        </div>
    );
};

export default SearchPage;
