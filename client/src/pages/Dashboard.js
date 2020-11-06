import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <main>
            <div>Your Dashboard!</div>
            <Link to="/create">Start a new decision here!</Link>
        </main>
    );
}

export default Dashboard;