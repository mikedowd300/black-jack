import React, { Component } from 'react';
import './Player.scss';

class Player extends Component {

  constructor(props) {
    super(props)
    this.state = {};

    this.updateBetSizeAndBankRoll = this.updateBetSizeAndBankRoll.bind(this);
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
        key={`${option.type}-${i}`}
        className="action-option"
        onClick={option.action}
      >
        {option.type}
      </button>);

  updateBetSizeAndBankRoll(action) {
    const { incBet, decBet, betSize, bankRoll } = this.props.playerData;
    const update = action === 'inc'
      ? incBet(betSize, bankRoll)
      : decBet(betSize, bankRoll)
    const player = {...this.props.playerData, betSize: update.betSize, bankRoll: update.bankRoll}
    this.props.updatePlayerData(player);
  }

  render = () => {
    const { betSize, bankRoll, avatarUrl } = this.props.playerData;
    return (
      <div className="player">
        <div className="hands-wrapper">
          { this.hands }
        </div>
        <div className="betsize-changer">
          <button
            className="inc-bet"
            onClick={() => this.updateBetSizeAndBankRoll('inc')}
          >+</button>
          <div className="bet-size">{`${betSize}  `}</div>
          <div className="bet-size">{bankRoll}</div>
          <button
            className="dec-bet"
            onClick={() => this.updateBetSizeAndBankRoll('dec')}
          >-</button>
        </div>
        <div className="action-options-wrapper">
          { this.actionOptions }
        </div>
        <div className="image-wrapper">
          <img src={avatarUrl} alt="avatar"/>
        </div>
      </div>
    );
  }
}

export default Player;
