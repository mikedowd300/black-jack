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
    setTimeout(() => (this.playGame()), 2000);
  }

  playGame() {
    console.log('SET CONDITIONS, DEFAULT FOR NOW');
    console.log('CONDITIONS WILL DICTATE TO EITHER PLAY USEING A WHILE LOOP OR A FOR LOOP');
    console.log('DECIDE IF ITS TIME TO SHUFFLE');
    console.log('USE TIMEOUT TO ALLOW USERS TO PLACE OR CHANGE BETS');
    console.log('SET ISINHAND OF ALL SEATS WITH BETSIZES GREATER THAN ZERO TO TRUE');
    console.log('BURN A CARD');
    console.log('DEAL');
    console.log('IF THE DEALER HAS AN ACE SHOWING OFFER INSURANCE');
    console.log('USE TIMEOUT AND STATUS BAR TO MAKE INSURANCE TIME VISIBLE');
    console.log('CHECK FOR DEALER BLACK JACK');
    console.log('IF DEALER HAS IT THEN PAY INSURED AND SET PLAYERS ISINHAND TO FALSE AND SKIP TO PAYOUT STEP');
    console.log('IF DEALER DOES NOT HAVE IT THEN COLLECT INSURANCE MONEY');
    console.log('COMPLETE PLAYERS HAND PLAYER BY PLAYER');
    console.log('THE HANDS SHOULD DECIDE WHICH OPTIONS IT HAS BASED ITS CARDS AND THE TABLE CONDITIONS');
    console.log('WHEN A PLAYER BUSTS, TAKE THE PLAYERS MONEY, DISCARD THE CARDS, SET ISINHAND TO FALSE, SET BUSTED TO TRUE');
    console.log('PLAY THE DEALERS CARDS');
    console.log('PAYOUT HANDS THAT ARE NOT BUSTED OF PLAYERS OF SEATS WHERE ISINHAND IS TRUE - THIS IS WHERE THE HAND SKIPS TO IF DEALER STARTS WITH BLACKJACK');
    console.log('DISCARD PLAYERS CARDS AFTER ALL PLAYERS ARE PAYED');
    console.log('LOOP REPEATS');
    console.log('IF LOOP WAS A FOR LOOP, DISPLAY STATS');
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
    console.log(this.props);
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
