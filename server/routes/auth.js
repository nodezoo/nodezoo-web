'use strict'

module.exports = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: function (request, reply) {
      let username = request.payload.username
      let password = request.payload.password

      // TODO Implement a proper validation schema
      if (username == 'admin' && password == 'admin')
        return reply({isLoggedIn: true, userName: 'Admin User', hasError: false, errorMessage: null})

      reply({isLoggedIn: false, userName: null, hasError: true, errorMessage: 'Invalid credentials'})
    }
  }
]

