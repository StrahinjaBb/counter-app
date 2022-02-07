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
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(by) {
        console.log("increment PARENT: " + by);

        this.setState(
            (prevState) => {
                return {count: prevState.count += by};
            }
        );
    }

    decrement(by) {
        console.log("derement PARENT: " + by);
        this.setState (
            (prevState) => {
                return {count: prevState.count -= by};
            }
        )
    }

    reset() {
        console.log("resete");
        this.setState (
            () => {
                return {count: 0};
            }
        )
    }

    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <div className="rez">{this.state.count}</div>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

class CounterButton extends Component {
    constructor() {
        super();

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className="counterButton">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        );
    }

    increment() {
        console.log("increment CHILD");

        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        console.log("decrement CHILD");
        this.props.decrementMethod(this.props.by);
    }
}

export default Counter;

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}