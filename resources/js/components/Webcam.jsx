'use strict'

import React, { Component } from 'react'

class Webcam extends Component {
  constructor (props) {
    super(props)
    this._video = React.createRef()
  }

  componentDidMount () {
    console.log(this.props)
    let video = this._video.current
    let constraints = { video: true }

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => (video.srcObject = stream))
      .catch(error => console.error('getUserMedia error: ', error))
  }

  render () {
    return (
      <video
        ref={this._video}
        style={{
          maxWidth: '100%',
          width: this.props.width || '100%',
          height: this.props.height || 'auto'
        }}
        autoPlay='true'
      />
    )
  }
}

export default Webcam
