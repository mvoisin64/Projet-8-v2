import React, { useState } from 'react';
import './Collapse.scss';
import ArrowBack from '../../img/arrow_back.svg';
const Collapse = ({ title, ArrowBack, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <h2 className='title'>{title}</h2>
            <button className="collapse__button" onClick={toggleCollapse}>
            <img 
                    src={ArrowBack} 
                    alt="Arrow" 
                    className={`collapse__arrow ${isOpen ? 'rotate' : ''}`} 
                />
            </button>

            {isOpen && <div className="collapse__content">{children}</div>}
        </div>
    );
};

export default Collapse;