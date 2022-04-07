import React, { useState } from 'react';

import './Header.css';

const Header = props => {
    const onTab1 = () => {
        props.onChangeTab(1);
    }

    const onTab2 = () => {
        props.onChangeTab(2);
    }

    const onTab3 = () => {
        props.onChangeTab(3);
    }

    const onTab4 = () => {
        props.onChangeTab(4);
    }

    const onTab5 = () => {
        props.onChangeTab(5);
    }

    const onTab6 = () => {
        props.onChangeTab(6);
    }

    return (
        <div className="header">
            <div id="navbar">
                <button className='button' id='button1' onClick={onTab1}>HOME</button>
                <button className='button' id='button2' onClick={onTab2}>PROFILE</button>
                <button className='button' id='button3' onClick={onTab3}>EXPERIENCE</button>
                <button className='button' id='button4' onClick={onTab4}>SKILLS</button>
                <button className='button' id='button5' onClick={onTab5}>PROJECTS</button>
                <button className='button' id='button6' onClick={onTab6}>CONTACT</button>
            </div>
        </div>
    );
};

export default Header;