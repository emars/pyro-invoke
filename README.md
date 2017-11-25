# Pyro-Invoke

Package for calling cloud functions

```js
const invoke = require('pyro-invoke')({
  getUserToken: () => Promise.resolve(''),
  baseUrl: 'http://some.firebase.function.com'
})

invoke('someFunctionName', {
  foo: 'bar'
})
```
