import React, { Component } from 'react';
import Table from './Components/Table/Table';
import Add from './Components/Add/Add';
import "./app.css"
import { BrowserRouter as Router } from 'react-router-dom';
import Create from './Components/Create/Create';
class App extends Component {
  render() {
    return (
      <Router default="/home">
        <div>
          <h1>Rest API</h1>
          <Add/>
          <Create/>
          <Table/>
        </div >
      </Router>
    );
  }
}
export default App;