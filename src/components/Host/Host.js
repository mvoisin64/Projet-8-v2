import React from "react";
import "./Host.scss";

const Host = ({ name, picture }) => {
    const [firstName, lastName] = name.split(" ");

    return (
        <div className="host">
            <div className="host_name">
                <p className="host_first-name">{firstName}</p>
                <p className="host_last-name">{lastName}</p>
            </div>
            <img src={picture} alt={name} className="host_picture" />
        </div>
    );
};

export default Host;