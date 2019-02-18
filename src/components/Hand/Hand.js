import React, { Component } from 'react';
import Card from './../Card/Card';
import './Hand.scss';

class Hand extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  actionOptions = this.props.handData.actionOptionsData
    .map((option,i) =>
      <button
        key={`${option.type}-${i}`}
        className="action-option"
        onClick={this.props.handData.hit}
      >
        {option.type}
      </button>);

  cards = this.props.handData.cards.map(card => <Card key={`${card.code}`} srcUrl={card.image}/>);

  render = () => {
    console.log(this.props.handData);
    return (
      <div className="hand">
        <div className="cards-wrapper">
          { this.cards }
        </div>
        <div className="action-options-wrapper">
          { this.actionOptions }
        </div>
      </div>
    );
  }
}

export default Hand;
