import React, { useState } from 'react';
import './Collapse.scss';
import ArrowBack from '../../img/arrow_back.svg';


const Collapse = ({ title, className, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={className}>

            <div className='collapse-part1'>

            <h2 className='title'>{title}</h2>
            <button className="collapse__button" onClick={toggleCollapse}>
            <img 
                    src={ArrowBack} 
                    alt="Arrow" 
                    className={`collapse__arrow ${isOpen ? 'rotate' : ''}`} 
                />
            </button>
            
            </div>

             <div className={isOpen ? 'collapse__open collapse__content' : 'collapse__content' }>{children}</div>

        </div>
    );
};

export default Collapse;