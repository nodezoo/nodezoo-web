
module.exports = function( options ) {
  var seneca = this


  seneca.add('ping:api',function(args,done){
    done(null,{ok:true,when:new Date().toISOString()})
  })
  

  seneca.act({role:'web',use:{
    prefix: '/api/1.0/',
    pin:    {ping:'*'},
    map: {
      api: {alias:'ping'}
    }
  }})
}
