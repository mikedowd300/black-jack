import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render = () => {
    return (
      <div className="card">
        <img src={this.props.srcUrl} />
      </div>
    );
  }
}

export default Card;
