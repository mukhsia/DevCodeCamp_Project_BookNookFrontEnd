import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import { BOOKDATA } from '../../localData';

const BookDetailsPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate;
    const { bookId } = useParams();
    const [bookDetails, setBookDetails] = useState(BOOKDATA);

    async function fetchDetails() {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes/${bookId}`
            );
            setBookDetails(response.data.volumeInfo);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        //fetchDetails();
    }, []);

    return <div className=''>{bookId}</div>;
};

export default BookDetailsPage;
