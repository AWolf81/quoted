import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// project components
import Home from './Home'

// project styles
import '../styles/All.css'



class Mantel extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" render={() => ( <Home /> )} />
      </div>
    );
  }
}

export default Mantel;
