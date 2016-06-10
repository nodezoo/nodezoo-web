'use strict'

var Boom = require('boom')

module.exports = [
  {
    method: 'GET',
    path: '/api/query',
    handler: function (request, reply) {
      var pattern = {role: 'search', cmd: 'search'}
      var payload = {query: request.query.q}

      request.seneca.act(pattern, payload, function (err, data) {
        if (err) return reply(Boom.internal(err))

        return reply(data)
      })
    }
  },
  {
    method: 'GET',
    path: '/api/info/{name}',
    handler: function (request, reply) {

      var update = request.query.update || false
      var pattern = {role: 'info', cmd: 'get', name: request.params.name, update: update}
      var payload = {}

      request.seneca.act(pattern, payload, function (err, data) {
        if (err) return reply(Boom.internal(err))

        data.no_npm = !data.npm
        data.no_github = !data.github
        data.no_travis = !data.travis
        data.no_coveralls = !data.coveralls

        return reply(data)
      })
    }
  }
]
