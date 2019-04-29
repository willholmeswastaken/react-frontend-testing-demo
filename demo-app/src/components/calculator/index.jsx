import React, { Component } from 'react';
import Result from './result';
import Title from '../title';
import Input from './input';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumber: 0,
            secondNumber: 0
        }
    }
    render() {
        const { firstNumber, secondNumber } = this.state;
        return (
            <div>
                <Title
                    titleText="thebestcalculator.com"
                />
                <Input
                    title="First Number"
                    onChange={firstNumber => this.setState({ firstNumber })}
                />
                <Input
                    title="Second Number"
                    onChange={secondNumber => this.setState({ secondNumber })}
                />
                <Result
                    firstNumber={firstNumber}
                    secondNumber={secondNumber}
                />
            </div>
        );
    }
}

export default Calculator;