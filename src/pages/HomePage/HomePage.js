import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
    // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
    const [user, token] = useAuth();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, [token]);

    const fetchCars = async () => {
        try {
            let response = await axios.get(
                'https://localhost:5001/api/cars/myCars',
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            );
            setCars(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return user ? (
        <div className="container">
            {console.log(user)}
            <h1>Welcome to BookNook, {user.userName}!</h1>
            <Link to="/search">Start Your Search</Link>
            {/* {cars &&
                cars.map((car) => (
                    <p key={car.id}>
                        {car.year} {car.model} {car.make}
                    </p>
                ))} */}
        </div>
    ) : (
        <div className="container">
            <h1>Welcome to BookNook!</h1>
            <Link to="/search">Start Your Search</Link>
        </div>
    );
};

export default HomePage;
