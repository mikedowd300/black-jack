import React, { Component } from 'react';
import Card from './../Card/Card';
import './Dealer.scss';

class Dealer extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render = () => {
    const cards = this.props.dealerData.cards.map(card => <Card key={`${card.code}`} srcUrl={card.image}/>)
    return (
      <div className="dealer">
        <div className="cards-wrapper">
          { cards }
        </div>
        <h3>DEALER</h3>
      </div>
    );
  }
}

export default Dealer;
