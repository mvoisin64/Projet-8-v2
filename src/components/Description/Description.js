import React from 'react';
import './Description.scss';
import Title from '../Title/title.js';
import Host from '../Host/Host.js';
import Tag from '../Tag/Tag.js';
import Rating from '../Rating/Rating.js'
import Collapse from '../Collapse/Collapse.js';

const Description = ({ descriptionlogement }) => {
    console.log(descriptionlogement)


    return (
        <div className="description">
            {/* <div className='descriptionpart1'> */}
            <Title className="item-title" title={descriptionlogement.title} location={descriptionlogement.location} />
            <Host className="item-host" name={descriptionlogement.host.name} picture={descriptionlogement.host.picture} />
            <div className='tag-container'>
                {descriptionlogement.tags.map((tag) => {

                    return <Tag text={tag} />
                })}
            </div>
            <Rating rating={descriptionlogement.rating} className="item-rating" />
            

            <Collapse className="item-collapse-1" title={"Description"}>
                <div>{descriptionlogement.description}</div>
            </Collapse>
            <Collapse className="item-collapse-2" title={"Équipements"} >
                <div>
                    {descriptionlogement.equipments.map((equipement) => {

                        return <div>{equipement}</div>
                    })}
                </div>
            </Collapse>
            </div>
        // </div>
    );
};

export default Description;