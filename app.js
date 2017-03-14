var hapi       = require('hapi')
var vision     = require('vision')
var inert      = require('inert')
var chairo     = require('chairo')
var handlebars = require('handlebars')


module.exports = function( options, fail, done ) {

  var server = new hapi.Server()
  server.connection(options.hapi)

  server.register( vision, fail )
  server.register( inert, fail )
  server.register( {register:chairo, options:{seneca:options.seneca}}, fail)
  
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: options.folder + '/www',
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/res/{path*}',
    handler: {
      directory: {
        path: options.folder + '/bower_components',
      }
    }
  })

  server.views({
    engines: { html: handlebars },
    path: options.folder + '/www',
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
        if( err ) return reply(err)

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
          reply(err||out)
        })
    }})

  done(server)
}
