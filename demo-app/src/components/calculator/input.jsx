import React from 'react';

const Input = ({ onChange, title }) => {
    return (
        <div>
            <label>{ title }</label>
            <input className="value-input" type="text" onChange={evt => onChange(parseInt(evt.target.value))} />
        </div>
    );
};

export default Input;