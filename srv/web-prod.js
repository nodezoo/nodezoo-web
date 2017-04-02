/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var BASES = process.env.BASES.split(',')

var Seneca = require('seneca')

var app = require('../web.js')

Seneca({tag: 'web'})
  .test('print')

  .use('mesh', {
    bases: BASES,
    host: '@eth0',
    sneeze: {silent:false}
  })

  .ready(function(){
    var server = app({seneca: this})

    this.log.info(server.info)
  })
