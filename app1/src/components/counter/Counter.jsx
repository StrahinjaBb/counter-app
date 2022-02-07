import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count : 0
        }

        this.increment = this.increment.bind(this);
    }

    increment(by) {
        console.log("increment PARENT: " + by);

        this.setState(
            (prevState) => {
                return {count: prevState.count += by};
            }
        );
    }

    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment}/>
                <CounterButton by={5} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
                <div className="rez">{this.state.count}</div>
            </div>
        );
    }
}

class CounterButton extends Component {
    constructor() {
        super();

        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counterButton">
                <button onClick={this.increment}>+{this.props.by}</button>
            </div>
        );
    }

    increment() {
        console.log("increment CHILD");

        this.props.incrementMethod(this.props.by);
    }
}

export default Counter;

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}