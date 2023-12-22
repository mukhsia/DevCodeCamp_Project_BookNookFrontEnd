import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import axios from 'axios';

const SearchBar = () => {
    const [user, token] = useAuth();

    return <div></div>;
};

export default SearchBar;
