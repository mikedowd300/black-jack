import React, { Component } from 'react';
import MainNav from './../../components/MainNav/MainNav';
import './HomePage.scss';

class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
    };
  }

  render = () => {
      return (
      <div className="home page">
        <MainNav changePage={this.props.changePage} />
        <h1>Hello Home Page</h1>
        <button className="btn" onClick={() => this.props.changePage('singlePlayer')}>Experiment Zone</button>
      </div>
    );
  };
}

export default HomePage;
