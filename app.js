var hapi       = require('hapi')
var vision     = require('vision')
var inert      = require('inert')
var chairo     = require('chairo')
var handlebars = require('handlebars')


module.exports = function(options) {
  var folder = options.folder || __dirname

  var server = new hapi.Server()
  server.connection({port: options.port || 8000})

  server.register( vision )
  server.register( inert )
  server.register( {register:chairo, options:{seneca:options.seneca}} )
  
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
    method: 'GET', path: '/', 
    handler: function( req, reply )
    {
      reply.view('index',{title:'nodezoo'})
    }})

  server.route({ 
    method: 'GET', path: '/info/{mod}', 
    handler: function( req, reply )
    {
      server.seneca.act('role:info,cmd:get',{name:req.params.mod}, function(err,mod){
        if( err ) {
          mod = {}
        }

        mod.no_npm = !mod.npm
        mod.no_github = !mod.github

        reply.view('info',{
          title: 'nodezoo - '+req.params.mod,
          mod: mod
        })
      })
    }})

  server.route({ 
    method: 'GET', path: '/api/query', 
    handler: function( req, reply ){
      server.seneca.act(
        'role:search,cmd:search',{query:req.query.q},
        function(err,out){
          if (err) {
            out = {items:[]}
          }

          reply(out)
        })
    }})

  server.start()

  return server
}
