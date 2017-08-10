/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var MOCK_SEARCH = JSON.parse(process.env.MOCK_SEARCH || 'false')
var MOCK_INFO = JSON.parse(process.env.MOCK_INFO || 'false')
var MOCK_SUGGEST = JSON.parse(process.env.MOCK_SUGGEST || 'false')
var MOCK = MOCK_SEARCH || MOCK_INFO || MOCK_SUGGEST


var Seneca = require('seneca')


// Build the frontend server using the hapi framework.
var app = require('../web.js')


Seneca({tag: 'web'})
  .test('print')

  .use('seneca-repl', {port:10010})

  .listen(9010)

  // Use port numbers for local development.
  .client({pin:'role:search', port:9020})
  .client({pin:'role:info', port:9030})
  .client({pin:'role:suggest', port:9060})

  .ready(function(){
    var server = app({seneca: this})

    this.log.info(server.info)
  })


// Run mock services that this service depends on.
if (MOCK) {
  var mock = Seneca({tag:'mock'})
        .test('print')

  if (MOCK_SEARCH) {
    mock
    .listen(9020)
    .add('role:search', function (msg, reply) {
      reply({

        // Create fake results using each term of the query.
        items: msg.query.split(/\s+/).map(function (term) {
          return {name:term, version:'1.0.0', desc:term+'!'}
        })
      })
    })
  }

  if (MOCK_INFO) {
    mock
    .listen(9030)
    .add('role:info', function (msg, reply) {
      reply({npm:{name:msg.name, version:'1.0.0'}})
    })
  }

  if (MOCK_SUGGEST) {
    mock
    .listen(9060)
    .add('role:suggest', function (msg, reply) {
      reply(msg.query.split(''))
    })
  }
}
