import React, { Component } from 'react';
import './OpenSpot.scss';
import { PlayerData } from './../../game-data/PlayerData';

class OpenSpot extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    };
  }

  render = () => {
    return (
      <div className="open-spot">
        <div className="sit-here-cta">
          <h3 onClick={() =>this.props.addPlayer(PlayerData({}), this.props.seatNumber)}>SIT</h3>
        </div>
      </div>
    );
  }
}

export default OpenSpot;
