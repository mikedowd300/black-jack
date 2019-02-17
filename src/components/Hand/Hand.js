import React, { Component } from 'react';
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


  render = () => {
    console.log(this.props.handData);
    return (
      <div className="hand">
        <div className="action-options-wrapper">
          { this.actionOptions }
        </div>
        <div className="cards">CARDS</div>
      </div>
    );
  }
}

export default Hand;
