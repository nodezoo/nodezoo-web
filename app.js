var hapi       = require('hapi')
var vision     = require('vision')
var inert      = require('inert')
var chairo     = require('chairo')
var handlebars = require('handlebars')


var server = new hapi.Server()
server.connection({ port: 8000 })
server.register( vision, fail )
server.register( inert, fail )
server.register( {register:chairo, options:{}}, function(err){
  if(err) return fail(err)
 
  server.seneca
    .client({port:9100,pin:'role:info'})
    .client({port:9003,pin:'role:search'})
    .repl(43000)

})


server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: __dirname + '/www',
    }
  }
})

server.route({
  method: 'GET',
  path: '/res/{path*}',
  handler: {
    directory: {
      path: __dirname + '/bower_components',
    }
  }
})

server.views({
  engines: { html: handlebars },
  path: __dirname + '/www',
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


server.start(fail)


function fail( err ) {
  if( err ) {
    console.log( err )
    process.exit(1)
  }
}
