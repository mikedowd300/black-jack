import React, { Component } from 'react';
import Seat from './../Seat/Seat';
import './Table.scss';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transition: 'table',
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.updateSeatsData = this.updateSeatsData.bind(this);
    this.updateSingleSeatData = this.updateSingleSeatData.bind(this);
  }

  TRANSITION_TIMEOUT = 15;

  componentWillMount() {
    setTimeout(() => (this.setState({ transition: 'table transition' })), this.TRANSITION_TIMEOUT);
  }

  updateSeatsData(seats) {
    this.props.updateTableDataState({...this.props.table, seats});
  }

  updateSingleSeatData(seat) {
    let seats = [...this.props.tableData.seats];
    seats[seat.seatNumber] = {...seat};
    this.updateSeatsData(seats);
  }

  addPlayer(player, seatNumber) {
    const seats = Object.assign([], this.props.tableData.seats);
    seats[seatNumber] = { ...seats[seatNumber], player, isTaken: true };
    this.updateSeatsData(seats);
  }

  removePlayer(seatNumber) {
    const seats = Object.assign([], this.props.tableData.seats);
    seats[seatNumber] = { ...seats[seatNumber], player: {}, isTaken: false };
    this.updateSeatsData(seats);
  }

  render = () => {
    const playerSeats = this.props.tableData.seats
      .map(
        (seat, i) => {
          seat.addPlayer = this.addPlayer;
          seat.removePlayer = this.removePlayer;
          return <Seat key={`${seat.status}-${i}`} seatData={seat} updateSingleSeatData={this.updateSingleSeatData}/>
        }
      );

    return (
      <div className={`${this.state.transition}`}>
        <div className="dealer"></div>
        <div className="players-wrapper">
          { playerSeats }
        </div>
      </div>
    );
  }
}

export default Table;
