import React, { Component } from 'react';
import MainNav from './../../components/MainNav/MainNav';
import './GameRoom.scss';

class GameRoom extends Component {

  constructor(props) {
    super(props)

    this.state = {};
  }

  render = () => {
      return (
      <div className="game-room page">
        <MainNav changePage={this.props.changePage} />
        <h1>HELLO GameRoom</h1>
      </div>
    );
  };
}

export default GameRoom;
