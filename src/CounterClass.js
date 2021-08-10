import React, {Component} from 'react';

class CounterClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };

        console.log('constructor[Class]');
    }

    componentDidMount() {
        console.log('componentDidMount[Class]');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate[Class]');
        if (nextState.number % 3 === 0) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate[Class]');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount[Class]');
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease() {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        console.log('render[Class]')
        return (
            <div>
                <h1>Class Counter</h1>
                <div>Value: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={() => this.handleDecrease()}>-</button>
            </div>
        );
    }
}

export default CounterClass;