import React from 'react';
import addNumbers from '../../helpers/calculations';

const Result = ({ firstNumber, secondNumber }) => {
    return (
        <div>
            { addNumbers(firstNumber, secondNumber) }
        </div>
    );
};

export default Result;