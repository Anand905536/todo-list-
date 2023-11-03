import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Wrong from '../404/Wrong';
import Dashboard from '../component/dashboard/Dashboard';

const Default = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('permission');
        if (data) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div>
            <Routes>
                {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
                   
                    <Route path="*" element={<Wrong />} />
              
            </Routes>
        </div>
    );
};

export default Default;
