import React from 'react';
import './Button.css';
import { ButtonStyle } from '../styles/button';

function Button({ text, onClick=() => {}, variant = ButtonStyle.PRIMARY, style = null, icon=null }) {
    const buttonClass = variant;

    return (
        <button className={`button ${buttonClass}`} style={style} onClick={onClick}>
            <h5>{text}</h5>
            {icon && (<img src={icon} alt="icon" width={18} />)}
        </button>
    );
}

export default Button;
