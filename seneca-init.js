"use strict";

var seneca = require('seneca')


var api = seneca()


if( 'dev' != api.options().env ) {
      
  api
    .use('./lib/api.js')

    .client({port:9100,pin:'role:info'})

    .listen(9000)
}
else {

  api
    .use('jsonfile-store',{folder:__dirname+'/data'})
    .use('../nodezoo-github')
    .use('../nodezoo-npm')
    .use('../nodezoo-info')
    .use('./lib/api.js')
  
    .add('role:info,req:part',function(args,done){
      done()
      
      this.act(
        'role:npm,cmd:get',
        {name:args.name},
        function(err,mod){
          this.act('role:info,res:part,part:npm',
                   {name:args.name,data:mod})
            
          this.act(
            'role:github,cmd:get',
            {name:args.name,giturl:mod.giturl},
            function(err,mod){
              this.act('role:info,res:part,part:github',
                       {name:args.name,data:mod})
            })
        })
    })
}


module.exports = function(){
  return api.export('web')
}
