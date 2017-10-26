import React, { Component } from 'react';

// project components
import NavBar from './NavBar'

// project styles
import '../styles/Home.css'
import '../styles/All.css'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
      </div>
    );
  }
}

export default Home;