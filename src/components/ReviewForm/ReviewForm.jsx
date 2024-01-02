import React from 'react';
import axios from 'axios';
import useCustomForm from '../../hooks/useCustomForm';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

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
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Leave a Review:
                    <input
                        name="text"
                        type="text"
                        value={formData.text}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Rating:
                    <input
                        name="rating"
                        type="number"
                        min="1.0"
                        max="5.0"
                        step="0.1"
                        value={formData.value}
                        onChange={handleInputChange}
                    />
                    /5.0
                </label>
                <button className="btn btn-primary mt-3">Submit!</button>
            </form>
        </div>
    );
};

export default ReviewForm;
