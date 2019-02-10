import React, { Component } from 'react';
import MainNav from './../../components/MainNav/MainNav';
import './Forum.scss';

class Forum extends Component {

  constructor(props) {
    super(props)

    this.state = {
    };
  }

  render = () => {
      return (
      <div className="forum page">
        <MainNav changePage={this.props.changePage} />
        <h1>HELLO FORUM</h1>
      </div>
    );
  };
}

export default Forum;
