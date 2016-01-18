'use strict'

// you can change the host for the server and metrics
// via env variables, usually needed when deploying
var HOST = process.env.HOST || 'localhost'
var STATS = process.env.STATS || 'localhost'

// 8000 by default or whatever you set the env variable to
var PORT = process.env.PORT || 8000

// Our hapi server bits
var Chairo = require('chairo')
var Hapi = require('hapi')
var Inert = require('inert')
var Path = require('path')

// Our server routes
var ClientRoutes = require('./routes/client')
var ApiRoutes = require('./routes/api')

// Log and end the process
// if an error is encountered
function endIfErr (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
}

// Create our server
var server = new Hapi.Server()
server.connection({port: PORT})

// Declare our Hapi plugin list.
var plugins = [
  Chairo,
  Inert
]

// Register our plugins, kick off the server
// if there is no error.
server.register(plugins, function (err) {
  endIfErr(err)

  // Set our realitive path (for our routes)
  var relativePath = Path.join(__dirname, '../dist/')
  server.realm.settings.files.relativeTo = relativePath

  // Wire up our http routes
  server.route(ClientRoutes)
  server.route(ApiRoutes)

  // Set up our seneca plugins
  var seneca = server.seneca

  // Enable Seneca's built in repl
  seneca.repl(33000)

  // meshify, no need for ports
  seneca.use('mesh', {auto: true})

  // Capture metrics for each pinned pattern.
  seneca.use('msgstats', {
    udp: {host: STATS},
    pins: ['role:info,cmd:get', 'role:search,cmd:search']
  })

  // Once seneca is ready we start our server
  seneca.ready(function () {
    seneca.log.info('hapi', server.info)
    
    server.start(endIfErr)
  })
})
