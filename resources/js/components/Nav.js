'use strict'

import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <div className='subtitle'>
        <a onClick={ store.goto('/') } href="javascript:;">Home</a>
        &nbsp;|&nbsp;<a onClick={ store.goto('/webcam') } href="javascript:;">WebCam</a>
      </div>
    );
  }
}

export default Nav