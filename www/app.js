/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */


var app = {
  tm: {},
  em: {},
  state: {
    lastkeytime: Number.MAX_VALUE
  }
}



app.display_results = function(body) {
  var items = body.items
  var divr = $('<div>')
  for(var i = 0; i < items.length; i++) {
    var item = items[i]
    var result = app.tm.result.clone()

    result.find('div.rank').css('background-image','url(img/hex'+item.rank+'.png)')

    result.find('a.site')
      .text(item.name+' '+item.version)
      .attr('href',item.site)

    result.find('a.info')
      .attr('href','/info/'+item.name)

    var git = result.find('a.git')
    if( item.git ) {
      git.attr('href',item.git)
    }
    else {
      git.empty()
    }

    result.find('a.npm')
      .attr('href',"http://npmjs.org/package/"+item.name)

    result.find('p.desc').text(item.desc)

    result.find('a.similar').attr('href','?s='+item.name)

    if( item.modified && item.created ) {
      result.find('span.modified').text( moment(item.modified).fromNow() )
      result.find('span.created').text( moment(item.created).fromNow() )
    }
    else result.find('div.time').remove();

    if( item.git_star ) {
      result.find('span.git_star').text(item.git_star)
    }
    else {
      result.find('span.git_star_line').remove()
    }

    if( item.git_fork ) {
      result.find('span.git_fork').text(item.git_fork)
    }
    else {
      result.find('span.git_fork_line').remove()
    }

    divr.append(result)
  }
  app.em.results.empty().css('display','block').append(divr)
  app.em.welcome.hide()
}


app.display_suggestions = function(body) {
  if (0 == body.length) {
    app.em.suggestions.hide().empty()
    return
  }

  app.em.suggestions.empty().css({
    top: app.em.term.position().top + app.em.term.height(),
    left: app.em.term.position().left
  }).show()

  body.forEach(function(suggestion) {
    app.em.suggestions.append(
      $('<li>')
        .click(function () {
          app.em.suggestions.empty().hide()
          app.em.term.val(suggestion)
        })
        .text(suggestion))
  })
}


app.query_last = ''

app.query = function(q) {
  if( _.isUndefined(q) || ''===q || app.query_last == q ) {
    return
  }

  app.state.lastkeytime = Number.MAX_VALUE
  var eq = encodeURIComponent(q)
  var href = document.location.href
  href = href.replace(/#.*$/,'')
  if( -1 == href.indexOf('?') ) {
    document.location.href = href+ '#q='+eq 
  }

  // app.record_search(q)

  $.ajax({
    url: "/api/query?q="+eq,
    success: app.display_results
  })
}


app.suggest = function(q) {
  $.ajax({
    url: "/api/suggest?q="+q,
    success: app.display_suggestions
  })
}



app.highlight_suggest = function(direction) {
  var suggestions = app.em.suggestions.children()

  suggestions.each(function (i, s) {
    $(s).removeClass('hisuggest')
  })

  var num_suggestions = suggestions.length
  app.highlight_suggest.index += direction
  app.highlight_suggest.index = Math.max(0,app.highlight_suggest.index)
  app.highlight_suggest.index = Math.min(num_suggestions-1,app.highlight_suggest.index)

  if (suggestions[app.highlight_suggest.index]) {
    $(suggestions[app.highlight_suggest.index]).addClass('hisuggest')
  }
}


app.highlight_suggest.index = -1


app.similar = function(name) {
  app.state.lastkeytime = Number.MAX_VALUE
  var ename = encodeURIComponent(name)
  $.ajax({
    url: "/api/similar?name="+ename,
    success: app.display_results
  })
}


app.route = function() {
  var up = parseUri(document.location.href)
  var qs = up.query || up.anchor

  var qp = {}
  _.each(qs.split('&'),function(kvs){var kv=kvs.split('=');qp[kv[0]]=kv[1]})

  if( qp.q ) {
    var q = decodeURIComponent(qp.q)
    app.em.term.val(q)
    app.query(q)
  }

  else if( qp.s ) {
    var name = decodeURIComponent(qp.s)
    app.similar(name)
  }
}


app.init = function() {
  app.em.results = $('#results')
  app.em.term    = $('#term').focus()
  app.em.welcome = $('#welcome')
  app.em.about   = $('a.about')
  app.em.suggestions = $('#suggestions')

  app.tm.result = $('#result').clone().removeClass('tm')
  
  $('#query_form').submit(function(){
    if (-1 != app.highlight_suggest.index) {
      app.em.term.val($(app.em.suggestions.children()[app.highlight_suggest.index]).text())
      app.highlight_suggest.index = -1
      app.em.suggestions.hide().empty()
    }

    var q = app.em.term.val()
    app.query(q)
    return false
  })

  $('#term').focus(function(){
    $('.result').removeClass('focused');
  })


  app.em.term.keyup(function(e) {
    if (40 === e.keyCode) {
      app.highlight_suggest(+1)
      return
    }
    else if (38 === e.keyCode) {
      app.highlight_suggest(-1)
      return
    }
    else if (13 === e.keyCode) {
      app.em.suggestions.hide().empty()
      return
    }

    app.highlight_suggest.index = -1
    app.suggest(app.em.term.val())
  })

  app.route()
}


$(app.init)




