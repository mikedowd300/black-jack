import React, { Component } from 'react';
import MainNav from './../../components/MainNav/MainNav';
import './SinglePlayer.scss';
import TableData from './../../game-data/TableData';
import Table from './../../components/Table/Table';

class SinglePlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tableData: {},
      conditions: {},
      transition: 'table-wrapper',
    };

    this.setTable = this.setTable.bind(this);
    this.updateTableDataState = this.updateTableDataState.bind(this);
  }

  componentWillMount() {
    this.setTable();
    setTimeout(() => (this.setState({ transition: 'table-wrapper transition' })), 10);
  }

  updateTableDataState(tableData) {
    this.setState({ tableData });
  }

  setTable = () => {
    this.setState({ tableData: new TableData() });
  }

  render = () => {
    console.log(this.state.tableData);
    return (
      <div className="single-player page">
        <MainNav changePage={this.props.changePage} />
        <div className={`${this.state.transition}`}>
          <Table tableData={this.state.tableData} updateTableDataState={this.updateTableDataState}/>
        </div>
      </div>
    );
  };
}

export default SinglePlayer;
