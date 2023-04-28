import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h4>This is home. {user && <span>{user.displayName}</span> }</h4>
        </div>
    );
};

export default Home;