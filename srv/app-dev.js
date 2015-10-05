
var HOST = process.env.HOST || 'localhost'
var STATS = process.env.STATS || 'localhost'

require('..')(
  {
    hapi: { port: 8000 },
    folder: __dirname+'/..',
    seneca: {}
  },
  fail,
  function(server){
    server.seneca
      .use('msgstats',{
        udp: { host: STATS },
        pins:['role:info,cmd:get','role:search,cmd:search']
      })
      .repl(43000)

      .client({ host:HOST, port:44001, pin:'role:info' })
      .client({ host:HOST, port:44002, pin:'role:search' })

      .listen(44000)

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
