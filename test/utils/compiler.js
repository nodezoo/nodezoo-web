/*
* Only compiling what we are actually testing so tests don't take too long to run
*/
var fs = require('fs')
var origJs = require.extensions['.js']
var babel = require('babel-core')

require.extensions['.js'] = function (module, filename) {
  // ignore node modules
  if (filename.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, filename)
  }
  var content = fs.readFileSync(filename, 'utf8')
  var compiled = babel.transform(content, {filename: filename, presets: ['es2015', 'react', 'stage-0']}).code
  return module._compile(compiled, filename)
}
