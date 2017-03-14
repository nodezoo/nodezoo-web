
var Seneca = require('seneca')

var HOST = process.env.HOST || 'localhost'
var STATS = process.env.STATS || 'localhost'


require('..')(
  {
    hapi: { port: 8000 },
    folder: __dirname+'/..',
    seneca: Seneca()
  },
  fail,
  function(server){
    server.seneca
      .test('print')


/*
      .use(require('seneca-repl'), {
        port: 33000
      })

      .use('zipkin-tracer', {sampling:1})

      .use('msgstats',{
        udp: { host: STATS },
        pins:['role:info,cmd:get','role:search,cmd:search']
      })

      .use('mesh',{})
*/

      .ready(function(){
        server.seneca.log.info('hapi',server.info)
        server.start(fail)
      })
  })


function fail(err) {
  if( err ) {
    console.log( err )
    process.exit(1)
  }
}
