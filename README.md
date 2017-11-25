# Pyro-Invoke

Package for calling cloud functions

```
const invoke = require('pyro-invoke')({
    getUserToken: () =>
        Promise.resolve(''),
    baseUrl: 'http://some.firebase.function.com'

})

invoke('someFunctionName', {
    foo:'bar'
})
```
