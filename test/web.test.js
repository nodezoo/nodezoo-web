/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var ChildProcess = require('child_process')
var Path = require('path')
var Code = require('code')
var Lab = require('lab')
var Wreck = require('wreck')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect


describe('web', function () {

  it('happy', {timeout: 4444}, function (done) {
    var web = ChildProcess.spawn( 
      process.argv[0], 
      [Path.join(__dirname, '../srv/web-dev.js')],
      { env: {
        MOCK_SEARCH: 'true', 
        MOCK_INFO: 'true' 
      }})

    process.on('exit', function () {
      web.kill()
    })

    var output = []
    web.stdout.on('data', function (data) {output.push(data.toString())})

    setTimeout(function () {
      expect(output.join('')).to.contain('hello')

      var mod = 'mod'+((''+Math.random()).substring(2))

      Wreck.get(
        'http://localhost:8000/api/query?q='+mod,
        function (err, res, payload) {

          expect(err).to.not.exist()
          expect(payload.toString()).to.contain(mod)
          
          Wreck.get(
            'http://localhost:8000/info/'+mod,
              function (err, res, payload) {

                expect(err).to.not.exist()
                expect(payload.toString()).to.contain(mod)
                
                web
                  .on('close', done)
                  .kill()
              })
        })
    }, 1111)
  })
})


