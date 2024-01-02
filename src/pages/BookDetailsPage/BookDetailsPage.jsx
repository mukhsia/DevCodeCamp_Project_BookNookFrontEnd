import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetailsPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate;
    const { bookId } = useParams();

    return <div>{bookId}</div>;
};

export default BookDetailsPage;
