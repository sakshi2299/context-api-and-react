import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteFood: 'rice' };
  }

  shouldComponentUpdate(nextProps, nextState) {

    return this.state.favoriteFood !== nextState.favoriteFood;
  }

  changeFood = () => {
    this.setState({ favoriteFood: 'Pizza' });
  }

  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoriteFood}</h1>
        <button type="button" onClick={this.changeFood}>Change food</button>
      </div>
    );
  }
}
export default Header;
