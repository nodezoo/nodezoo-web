/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var PORT = process.env.PORT || 9000

var Seneca = require('seneca')

var app = require('../web.js')

Seneca({tag: 'web'})
  .test('print')

  .use('zipkin-tracer', {host: 'zipkin', sampling: 1})
  .use('statsd', {host: 'stats'})

  .listen(PORT)

  .client({pin:'role:search', host:'search', port:PORT})
  .client({pin:'role:info', host:'info', port:PORT})
  .client({pin:'role:suggest', host:'suggest', port:PORT})

  .ready(function(){
    var server = app({seneca: this})

    this.log.info(server.info)
  })
