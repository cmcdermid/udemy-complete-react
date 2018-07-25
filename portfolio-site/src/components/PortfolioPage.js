import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        Checkout the following things I've done:
        <br/>
        <Link to="/portfolio/1">Item One</Link><Link to="/portfolio/2">Item 2</Link>
    </div>
);

export default PortfolioPage;