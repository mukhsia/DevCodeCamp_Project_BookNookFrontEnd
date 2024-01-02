import React from 'react';
import axios from 'axios';
import useCustomForm from '../../hooks/useCustomForm';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './ReviewForm.css';

const ReviewForm = ({ bookId, fetchReviews }) => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const defaultValues = {
        bookId: bookId,
        text: '',
        rating: 0,
    };

    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
        postNewReview,
        defaultValues
    );

    async function postNewReview() {
        try {
            let response = await axios.post(
                'https://localhost:5001/api/reviews',
                formData,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            );
            fetchReviews();
        } catch (error) {
            console.warn('Error trying to post review: ', error);
        }
    }

    return (
        <div className="container">
            <form className="form d-flex" onSubmit={handleSubmit}>
                <label>
                    Leave a Review:
                    <input
                        id="reviewBox"
                        name="text"
                        type="text"
                        value={formData.text}
                        onChange={handleInputChange}
                    />
                </label>
                <div className="d-flex flex-row justify-content-between align-items-start">
                    <label className="d-flex flex-row align-items-start mx-4">
                        Rating:
                        <input
                            id="rating"
                            name="rating"
                            type="number"
                            min="1.0"
                            max="5.0"
                            step="0.1"
                            value={formData.value}
                            onChange={handleInputChange}
                            className="mx-2 "
                        />
                        <p className="mx-2">out of 5.0</p>
                    </label>
                    <button className="btn btn-primary">Submit!</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;
