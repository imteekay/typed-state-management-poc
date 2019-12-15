import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.submitValue = this.submitValue.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  submitValue() {
    this.props.onUpdateValue(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    const { inputValue } = this.state;
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
        <br/>
        <input value={inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })}/>
        <button onClick={this.submitValue}>
          Submit value
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onUpdateValue: PropTypes.func.isRequired,
}

export default Counter;
