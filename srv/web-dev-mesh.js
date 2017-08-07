/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var Seneca = require('seneca')


// Build the frontend server using the hapi framework.
var app = require('../web.js')


Seneca({tag: 'web'})
  //.test()
  .test('print')
  .use('monitor')

  .use('mesh')

  .use('seneca-repl', {port:10010})

  .ready(function(){
    var server = app({seneca: this})

    this.log.info(server.info)
  })
