# parcel-bug

[![Greenkeeper badge](https://badges.greenkeeper.io/corlaez/parcel-bug.svg)](https://greenkeeper.io/)

Reproduces this issue:
https://github.com/parcel-bundler/parcel/issues/706


### 🤔 Expected Behavior

watch and build should allow assigning to window object as `parcel index.html``

either with
* "prestart": "yarn build",
* "prestart": "yarn watch",

0. yarn start
1. in my browser console: `foo` should not be undefined
2. in my browser console: `help` should not be undefined
3. in my browser console: `helpts` should not be undefined

### 😯 Current Behavior
window object doesn't get any of the assigned props.

either with
* "prestart": "yarn build",
* "prestart": "yarn watch",

0.  yarn start
1. in my browser console: `foo` is undefined
2. in my browser console: `help` is undefined
3. in my browser console: `helpts` is undefined

*dev-serve behaves correctly*