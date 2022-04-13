import React from 'react';

import './Ability.css';
import Star from './Star';

const Ability = props => {
    return (
        <div className="ability">
            <p className="abilityname">{props.name}</p>
            <Star className="stars" num={props.starnum}></Star>
        </div>
    );
};

export default Ability;