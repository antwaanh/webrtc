'use strict'

import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'
import Welcome from './pages/Welcome'
import Webcam from './pages/Webcam'

window.store = {
  route: {
    '/': Welcome,
    '/webcam': Webcam
  },

  component: Welcome,

  goto(url, app) {
    return () => {
      store.component = store.route[url]
      updateReact()
    }
  }
}

window.updateReact = () => {
  ReactDom.render(
    <App component={store.component}></App>,
    document.getElementById('root')
  )
};

updateReact();
