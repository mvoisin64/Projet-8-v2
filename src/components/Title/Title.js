import React from 'react';
import './title.scss';


const Title = ({title,location}) => {
    console.log(title)
    return (
        <div className="title">
<h1 className='maintitle'>{title}</h1>
<h2 className='location'>{location}</h2>
        </div>
    );
};

export default Title;