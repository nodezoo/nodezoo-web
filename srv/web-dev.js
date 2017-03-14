var MOCK_SEARCH = JSON.parse(process.env.MOCK_SEARCH || 'false')
var MOCK_INFO = JSON.parse(process.env.MOCK_INFO || 'false')
var MOCK = MOCK_SEARCH || MOCK_INFO


var Seneca = require('seneca')


// Build the frontend server using the hapi framework.
var app = require('..')


Seneca({tag: 'web'})
  .test('print')

  .listen(9010)

  // Use port numbers for local development.
  .client({pin:'role:search', port:9020})
  .client({pin:'role:info', port:9030})

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

}
