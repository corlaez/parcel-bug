# parcel-bug

Reproduces this issue:
https://github.com/parcel-bundler/parcel/issues/706


### 🤔 Expected Behavior

watch and build should allow assigning to window object as `parcel index.html``


0. yarn dev-serve
1. in my browser console: `foo` should not be undefined
2. in my browser console: `help` should not be undefined
3. in my browser console: `helpts` should not be undefined

### 😯 Current Behavior
window object doesn't get any of the assigned props.

0.  yarn build or yarn watch
1. in my browser console: `foo` should is undefined
2. in my browser console: `help` should is undefined
3. in my browser console: `helpts` should is undefined
