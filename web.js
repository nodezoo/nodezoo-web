/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var hapi       = require('hapi')
var vision     = require('vision')
var inert      = require('inert')
var handlebars = require('handlebars')


module.exports = function(options) {
  var folder = options.folder || __dirname

  var server = new hapi.Server()
  server.connection({port: options.port || 8000})

  server.register( vision )
  server.register( inert )

  var seneca = options.seneca
  
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: folder + '/www',
      }
    }
  })

  server.views({
    engines: { html: handlebars },
    path: folder + '/www',
    layout: true
  })

  server.route({ 
    method: 'GET',
    path: '/', 
    handler: function (request, reply) {
      reply.view('index', {title: 'nodezoo'})
    }})


  server.route({ 
    method: 'GET', path: '/info/{mod}', 
    handler: function( request, reply )
    {
      //server.
        seneca.act(
        {
          role: 'info',
          cmd: 'get',
          name: request.params.mod
        }, 
        function (err, mod) {
          if( err ) {
            mod = {}
          }

          mod.no_npm = !mod.npm
          mod.no_github = !mod.github

          reply.view('info',{
            title: 'nodezoo - '+request.params.mod,
            mod: mod
          })
        })
    }})


  server.route({ 
    method: 'GET',
    path: '/api/query', 
    handler: function (request, reply) {
      seneca.act(
        {
          role: 'search',
          cmd: 'search',
          query: request.query.q
        },
        function (err, out) {
          if (err) {
            out = {items: []}
          }

          reply(out)
        })
    }})


  server.route({ 
    method: 'GET', path: '/api/suggest', 
    handler: function( request, reply ){
        seneca.act(
        'role:suggest,cmd:suggest',{query:request.query.q,default$:[]},
        function(err,out){
          reply(out||[])
        })
    }})

  server.start()

  return server
}
