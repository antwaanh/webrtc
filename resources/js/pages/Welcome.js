'use strict'

import React from 'react'
import Camera from '../components/Camera'

class Welcome extends React.Component {
  static title: 'Welcome to WebRTC'

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='page'>
        <h1>Home</h1>
        <p>AdonisJs + React will make you feel confident about your code</p>
      </div>
    )
  }
}

export default Welcome
