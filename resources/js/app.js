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
      // console.log(url)
      //window.location.replace(url)
      //window.store.route[window.location.pathName || '/']
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
