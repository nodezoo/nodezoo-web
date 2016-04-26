// this setups up a test dom
// usage require('./testdom')([MARKUP]), where markup is optional and default is a html body
// This needs to go before React is required, so that it knows about the fake DOM
module.exports = function (markup) {
  if (typeof document !== 'undefined') return
  var jsdom = require('jsdom').jsdom
  var doc = jsdom(markup || '<!doctype html><html><body></body></html>')
  global.document = doc
  global.window = doc.defaultView
  global.navigator = {
    userAgent: 'node.js'
  }

  propagateToGlobal(doc.defaultView)

  function propagateToGlobal (window) {
    for (let key in window) {
      if (!window.hasOwnProperty(key)) continue
      if (key in global) continue

      global[key] = window[key]
    }
  }
}
