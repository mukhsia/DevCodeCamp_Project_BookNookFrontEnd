import React from 'react';
import { useEffect, useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';

import axios from 'axios';

const SearchBar = ({ setBooks }) => {
    const defaultValues = {
        searchParam: '',
    };

    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
        fetchBooks,
        defaultValues
    );

    async function fetchBooks() {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${formData.searchParam}`
            );
            console.log(response.data.items);
            setBooks(response.data.items);
        } catch (error) {
            console.log(error);
            console.log(error.response);
        }
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    <input
                        type='text'
                        name='searchParam'
                        value={formData.searchParam}
                        onChange={handleInputChange}
                    />
                </label>
                <button type='submit'>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
