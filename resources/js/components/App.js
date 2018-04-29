'use strict'

import React from 'react'
import Nav from './../components/Nav'
// import {Welcome, Webcam} from './../pages'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log({nextProps, prevState})
    return null;
  }
  
  render() {
    let Component = this.props.component
    
    return (
      <div>
        <Nav />
        <Component />
      </div>
    );
  }
}

export default App