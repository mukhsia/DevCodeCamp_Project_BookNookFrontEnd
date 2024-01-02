import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookDetailsPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate;

    return <div></div>;
};

export default BookDetailsPage;
