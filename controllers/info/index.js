'use strict';


var seneca = require('seneca')()


module.exports = function (router) {

  router.get('/:mod', function (req, res) {
    var mod = req.params.mod
    console.log("++++++++++++");
    console.log(mod);

    req.seneca.act('role:info,cmd:get',{name:mod}, function(err,mod){
      if( err ) return res.status(500).end();
      if( !mod ) return res.status(404).end();

      var model = {
        mod:  mod
      }
      console.log("****************");

      console.log(mod)

      res.render('info', model);
    })
  });
};
