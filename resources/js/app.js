'use strict'

import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'
import Welcome from './pages/Welcome'
import Webcam from './pages/Webcam'

const routes = {
  '/': Welcome,
  '/webcam': Webcam
}

window.store = {
  routes: routes,
  component: routes[window.location.pathname || '/'],
  goto(url, app) {
    return () => {
      window.location = url
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
