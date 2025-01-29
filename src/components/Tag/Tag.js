import React from 'react';
import './Tag.scss';

const Tag = ({ text }) => {
    return (
        <span className="tag">
            {text}
        </span>
    );
};


export default Tag;