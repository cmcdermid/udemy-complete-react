import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <h1>A Thing I've Done</h1>
        This is my Portfolio item {props.match.params.id}
    </div>
);

export default PortfolioItemPage;