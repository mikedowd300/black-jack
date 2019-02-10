import React, { Component } from 'react';
import { pageEnums } from './utilities/pageEnums';
import HomePage from './pages/HomePage/HomePage';
import GameRoom from './pages/GameRoom/GameRoom';
import SinglePlayer from './pages/SinglePlayer/SinglePlayer';
import Forum from './pages/Forum/Forum';
import './App.scss';
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: pageEnums.HOME,
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage = currentPage => {
    this.setState({currentPage});
  }

  render() {
    const pages = {
      home: <HomePage changePage={this.changePage} />,
      singlePlayer: <SinglePlayer changePage={this.changePage} />,
      gameRoom: <GameRoom changePage={this.changePage} />,
      forum: <Forum changePage={this.changePage} />,
    };

    return (
      pages[this.state.currentPage]
    );
  }
}

export default App;
