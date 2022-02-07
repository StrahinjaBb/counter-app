import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            counter : 0
        }
    }

    increment() {
        console.log("increment PARENT");
    }

    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment}/>
                <CounterButton by={5} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
            </div>
        );
    }
}

class CounterButton extends Component {
    constructor() {
        super();

        this.state = {
            counter : 0
        }
    }

    render() {
        return (
            <div className="counterButton">
                <button>+{this.props.by}</button>
            </div>
        );
    }

    increment() {
        console.log("increment CHILD");
    }
}

export default Counter;

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}