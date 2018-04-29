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
      let c = store.routes[url]
      store.component = c
      window.history.pushState(c.name, c.name, url);
      updateReact()
    }
  }
}

window.updateReact = () => {
  document.title = store.component.name
  ReactDom.render(
    <App component={store.component}></App>,
    document.getElementById('root')
  )
};

updateReact();
