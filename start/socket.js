'use strict'

/*
 |--------------------------------------------------------------------------
 | Routes
 |--------------------------------------------------------------------------
 |
 | Http routes are entry points to your web application. You can create
 | routes for different URL's and bind Controller actions to them.
 |
 | A complete guide on routing is available here.
 | http://adonisjs.com/docs/4.0/routing
 |
 */

const Ws = use('Ws')

Ws.channel('news', ({ socket }) => {
  console.log('a new subscription for news topic')
})
Ws.channel('chat', ({ socket }) => {
  console.log('user joined with %s socket id', socket.id)
})
Ws.channel('webrtc', 'WebrtcController')
