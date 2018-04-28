'use strict'

class WebrtcController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage () {
    // same as: socket.on('message')
  }

  onClose () {
    // same as: socket.on('close')
  }

  onError () {
    // same as: socket.on('error')
  }
}

module.exports = WebrtcController
