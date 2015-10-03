
require('..')(
  {
    hapi: { port: 8000 },
    folder: __dirname+'/..',
    seneca: {}
  },
  fail,
  function(server){
    server.seneca
      .repl(43000)

      .add('role:search,cmd:search',function(msg,done){
        done(null,{items:[{
          name:'foo',
          version:'0.0.0'
        }]})
      })

      .add('role:info,cmd:get',function(msg,done){
        done(null,{npm:{
          name:'foo',
          version:'0.0.0'
        }})
      })

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
