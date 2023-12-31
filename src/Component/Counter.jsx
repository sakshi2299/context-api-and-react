import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritefood: "pizza"})
    }, 1000)
  }

  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoritefood}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
