"use strict";

var seneca = require('seneca')

var api = seneca()

api
  .use('./lib/api.js')

  .client({port:9100,pin:'role:info'})
  .client({port:9003,pin:'role:search'})

  .listen(9000)


module.exports = function(){
  return api.export('web')
}
