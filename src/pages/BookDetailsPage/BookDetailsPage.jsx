import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import Book from '../../components/Book/Book';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewList from '../../components/ReviewList/ReviewList';

import { BOOKDATA } from '../../localData';

const BookDetailsPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate;

    const { bookId } = useParams();

    const [bookDetails, setBookDetails] = useState();
    const [bookReviews, setBookReviews] = useState();
    const [isFavorite, setIsFavorite] = useState(false);

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

    async function fetchReviews() {
        try {
            let response;
            if (user) {
                response = await axios.get(
                    `https://localhost:5001/api/bookdetails/${bookId}`,
                    {
                        headers: {
                            Authorization: 'Bearer ' + token,
                        },
                    }
                );
            } else {
                response = await axios.get(
                    `https://localhost:5001/api/bookdetails/${bookId}`
                );
            }
            console.log(response.data);
            setIsFavorite(response.data.favorited);
            setBookReviews(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDetails();
        fetchReviews();
    }, []);

    return (
        <div>
            {bookId}
            <Book
                bookDetails={bookDetails}
                isFavorite={isFavorite}
                user={user}
            />
            <ReviewList bookReviews={bookReviews} />
            <ReviewForm />
        </div>
    );
};

export default BookDetailsPage;
