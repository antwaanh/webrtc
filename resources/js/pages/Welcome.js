'use strict'

import React from 'react'

class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='page'>
        <div className='logo'><p /></div>
        <h1>Home</h1>
        <p>AdonisJs + React will make you feel confident about your code</p>
      </div>
    );
  }
}

export default Welcome