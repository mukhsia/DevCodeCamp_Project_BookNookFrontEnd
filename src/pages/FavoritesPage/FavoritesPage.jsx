import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FavoritesPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();

    return <div></div>;
};

export default FavoritesPage;
