import React, { Component } from 'react';
import MainNav from './../../components/MainNav/MainNav';
import './SinglePlayer.scss';

class SinglePlayer extends Component {

  constructor(props) {
    super(props)

    this.state = {
    };
  }

  render = () => {
      return (
      <div className="single-player page">
        <MainNav changePage={this.props.changePage} />
        <h1>HELLO GameRoom</h1>
      </div>
    );
  };
}

export default SinglePlayer;
