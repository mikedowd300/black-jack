import React, { Component } from 'react';
import './Player.scss';

class Player extends Component {

  constructor(props) {
    super(props)
    this.state = {};

    this.updateBetSizeAndBankRoll = this.updateBetSizeAndBankRoll.bind(this);
    this.incBet = this.incBet.bind(this);
    this.decBet = this.decBet.bind(this);
  }

  hands = this.props.playerData.handsData
    .map((hand,i) =>
      <div
        key={`${this.props.playerData.name}-${hand}-${i}`}
        className="hand"
      >
        HAND
      </div>);

  actionOptions = this.props.playerData.actionOptionsData
    .map((option,i) =>
      <button
        key={`${option.name}-${i}`}
        className="action-option"
        onClick={option.action}
      >
        {option.name}
      </button>);

  updateBetSizeAndBankRoll(betSize, bankRoll) {
    const player = {...this.props.playerData, betSize, bankRoll}
    this.props.updatePlayerData(player);
  }

  incBet() {
    const { betSize, bankRoll } = this.props.playerData;
    let inc = Math.min(1000, bankRoll);;
    if(betSize < 5 ){
      inc = Math.min(2, bankRoll);
    } else if(betSize < 50) {
      inc = Math.min(5, bankRoll);
    } else if(betSize < 100) {
      inc = Math.min(10, bankRoll);
    } else if(betSize < 200) {
      inc = Math.min(20, bankRoll);
    } else if(betSize < 500) {
      inc = Math.min(50, bankRoll);
    } else if(betSize < 1000) {
      inc = Math.min(100, bankRoll);
    } else if(betSize < 5000) {
      inc = Math.min(500, bankRoll);
    }

    this.updateBetSizeAndBankRoll(betSize + inc, bankRoll - inc)
  }

  decBet() {
    const { betSize, bankRoll } = this.props.playerData;
    let dec = 1000
    if(betSize <= 2) {
      dec = betSize;
    } else if(betSize <= 5 ){
      dec = 2
    } else if(betSize <= 50) {
      dec = 5
    } else if(betSize <= 100) {
      dec = 10
    } else if(betSize <= 200) {
      dec = 20
    } else if(betSize <= 500) {
      dec = 50
    } else if(betSize <= 1000) {
      dec = 100
    } else if(betSize <= 5000) {
      dec = 500
    }

    this.updateBetSizeAndBankRoll(betSize - dec, bankRoll + dec)
  }

  render = () => {
    console.log('Player', this.props);
    return (
      <div className="player">
        <div className="hands-wrapper">
          { this.hands }
        </div>
        <div className="betsize-changer">
          <button className="inc-bet" onClick={this.incBet}>+</button>
          <div className="bet-size">{`${this.props.playerData.betSize}  `}</div>
          <div className="bet-size">{this.props.playerData.bankRoll}</div>
          <button className="dec-bet" onClick={this.decBet}>-</button>
        </div>
        <div className="action-options-wrapper">
          { this.actionOptions }
        </div>
        <div className="image-wrapper">
          <img src={this.props.playerData.avatarUrl}/>
        </div>
      </div>
    );
  }
}

export default Player;
