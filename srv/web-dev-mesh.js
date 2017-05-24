/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var Seneca = require('seneca')


// Build the frontend server using the hapi framework.
var app = require('../web.js')


Seneca({tag: 'web'})
  .test()
  .use('monitor')
  .use('mesh', {
    xbases:['127.0.0.1:39000'],
    xhost:'127.0.0.1',
    xsneeze:{silent:false}
  })

  .ready(function(){
    var server = app({seneca: this})

    this.log.info(server.info)
  })
