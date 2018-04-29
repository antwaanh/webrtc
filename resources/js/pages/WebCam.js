'use strict'

import React from 'react'
import Camera from './../components/Camera'

class Webcam extends React.Component {
  render () {
    return (
      <div className='page'>
        <h1>Webcam</h1>
        <p>AdonisJs + React will make you feel confident about your code</p>
        <Camera />
      </div>
    )
  }
}

export default Webcam
