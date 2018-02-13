import React, { Component } from 'react'
import './App.css'
import CoursesContainer from './components/CoursesContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Admin Dashboard</h1>
        </div>
        <CoursesContainer />
      </div>
    );
  }
}

export default App