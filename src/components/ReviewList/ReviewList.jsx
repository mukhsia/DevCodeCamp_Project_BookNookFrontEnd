import React from 'react';

const ReviewList = ({ bookReviews }) => {
    return (
        <div className='container'>
            <h2>
                Average User Rating: {bookReviews ? bookReviews.average : '-'}
                /5.0
            </h2>
            <h3>User Reviews:</h3>
            <ul>
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
