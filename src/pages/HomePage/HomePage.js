import React, { Component } from 'react';
import './HomePage.scss';

class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {};
  }

  render = () => {
      return (
      <div className="home">
        <ul className="home-nav">
          <li>Home</li>
          <li>BlackJack</li>
          <li>GameRoom</li>
          <li>Forum</li>
        </ul>
      </div>
    );
  };
}

export default HomePage;
