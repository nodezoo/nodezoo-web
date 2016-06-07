# Mocha Chai Testing

## Commands

### Run Linter

```
npm run lint

```

### Run Tests, Coverage, and Linter

```
npm run test

```

### Open Coverage Report in Browser

```
npm run open-coverage

```

Creating Tests

Testing React Components requires a fake dom. To make things easy, all that is needed is a require of the jsdom at the top of the file.

### Require This File before React is Imported!

```
require('./utils/test-dom')()

```

or

```
var testDom = require(./utils/test-dom)
testDom()
```

This function takes an option document param string, but defaults automatically to a html5 document with body:

```

'<!doctype html><html><body></body></html>'

```

which should cover most cases

###

* Create Testing Utility that Automatically Stubs out Child Components
