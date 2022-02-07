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
        this.setState(
            { 
                count: 0 
            }
        );
    }

    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <div className="rez">{this.state.count}</div>
                <button onClick={this.reset} className="resetBtn">Reset</button>
            </div>
        );
    }
}

class CounterButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="counterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }
}

export default Counter;

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}