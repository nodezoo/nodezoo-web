
module.exports = function( options ) {
  var seneca = this
  var plugin = 'api'


  seneca.add({role:plugin,cmd:'ping'},function(args,done){
    done(null,{ok:true,when:new Date().toISOString()})
  })


  seneca.add({role:plugin,cmd:'query'},cmd_query)


  function cmd_query(args,done){
    var seneca = this

    var q = args.q
    seneca.act('role:search,cmd:search',{query:q},done)
  }
  

  seneca.act({role:'web',use:{
    prefix: '/api/1.0/',
    pin:    {role:plugin,cmd:'*'},
    map: {
      ping:  true,
      query: true
    }
  }})


}
