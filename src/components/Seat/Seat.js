import React, { Component } from 'react';
import Player from './../Player/Player';
import OpenSpot from './../OpenSpot/OpenSpot';
import './Seat.scss';

class Seat extends Component {

  constructor(props) {
    super(props)
    this.state = {};

    this.updatePlayerData = this.updatePlayerData.bind(this);
  }

  updatePlayerData(player) {
    const seat = {...this.props.seatData, player};
    this.props.updateSingleSeatData(seat);
  }

  render = () => {
    console.log(this.props);
    const innerElem = this.props.seatData.isTaken
      ? <Player
          playerData={this.props.seatData.player}
          updatePlayerData={this.updatePlayerData}
        />
      : <OpenSpot addPlayer={this.props.seatData.addPlayer} seatNumber={this.props.seatData.seatNumber} />
    return (
      <div className="seat">
      { innerElem }
      </div>
    );
  }
}

export default Seat;
