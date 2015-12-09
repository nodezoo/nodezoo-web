
var HOST = process.env.HOST || 'localhost'
var STATS = process.env.STATS || 'localhost'

require('..')(
  {
    hapi: { port: 8000 },
    folder: __dirname+'/..',
    seneca: { log:'standard' }
  },
  fail,
  function(server){
    server.seneca

      .use('msgstats',{
        udp: { host: STATS },
        pins:['role:info,cmd:get','role:search,cmd:search']
      })

      .use('mesh',{auto:true})

      .repl(33000)

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
