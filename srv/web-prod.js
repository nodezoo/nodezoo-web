/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

//var BASES = process.env.BASES.split(',')
var CONSUL = process.env.CONSUL_SERVICE_HOST || 'localhost'


var Seneca = require('seneca')

var app = require('../web.js')

Seneca({tag: 'web'})
  .test('print')

  .use('consul-registry', {
    host: CONSUL
  })

  .use('mesh', {
    //bases: BASES,
    host: '@eth0',
    discover: {
      registry: {
        active: true
      }
    },
    sneeze: {silent:false}
  })

  .ready(function(){
    var server = app({seneca: this})

    this.log.info(server.info)
  })
