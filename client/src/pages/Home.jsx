// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // when component mounts if fetches user data
        const fetchUser = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/auth/success', {
                    withCredentials: true // Important to send the session cookie
                });
                setUser(data.user);
                console.log(data.user);
                
            } catch (error) {
                console.error("Not authenticated");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const logout = () => {
        window.location.href = 'http://localhost:3000/auth/logout';
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return (
          <div>
            <h1>Welcome!</h1>
            <p>You are not logged in. Please <a href="/login">login</a>.</p>
          </div>
        );
    }

    return (
        <div>
            <h1>Welcome, {user.firstName}!</h1>
            <img src={user.image} alt="profile" />
            <p>Email: {user.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;