import React from 'react';
import './ReviewList.css';

const ReviewList = ({ bookReviews }) => {
    return (
        <div className="container d-flex flex-column align-items-start">
            <h3>
                Average User Rating: {bookReviews ? bookReviews.average : '-'}
                /5.0
            </h3>
            <h4>User Reviews:</h4>
            <ul className="reviewList d-flex flex-column align-items-start">
                {bookReviews &&
                    bookReviews.reviews.map((review, index) => {
                        return (
                            <li key={index}>
                                <p>
                                    {review.rating} - {review.text} -{' '}
                                    {review.owner.firstName}{' '}
                                    {review.owner.lastName}
                                </p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default ReviewList;
