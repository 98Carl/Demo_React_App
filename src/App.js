import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import InstructorApp from './component/InstructorApp';


class App extends Component {
  render() {
    return (
      <div className="container">
        <InstructorApp />
      </div>
    );
  }
}

export default App;
