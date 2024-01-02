import React from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import axios from 'axios';
import './SearchBar.css';

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
            setBooks(response.data.items);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container d-flex align-items-start mb-4">
            <form
                className="form d-flex align-items-start flex-row p-2"
                onSubmit={handleSubmit}
            >
                <label>
                    <input
                        type="text"
                        name="searchParam"
                        value={formData.searchParam}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit" className="searchButton">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
