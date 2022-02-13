# vue-plugin-load-script [![license](https://img.shields.io/github/license/tserkov/vue-plugin-load-script.svg)]()
A  plugin for injecting remote scripts.

Compatible with Vue 2.

For Vue 3, see [the vue3 branch](/tserkov/vue-plugin-load-script/tree/vue3).

## Install

``` bash
# npm
npm install --save vue-plugin-load-script@^1.x.x
```

``` bash
# yarn
yarn add vue-plugin-load-script@^1.x.x
```

## Use

### With Vue
```javascript
  // In main.js
  import LoadScript from 'vue-plugin-load-script';

  Vue.use(LoadScript);
```

### With Nuxt
```javascript
// @/plugins/load-script.js
import Vue from 'vue';
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);
```

```javascript
// @/nuxt.config.js
//...
  plugins: [
    { src: '@/plugins/load-script.js' },
  ],
  //...
  build: {
    transpile: ['vue-plugin-load-script'],
  },
//...
```
The `build.transpile` option is required since this plugin is exported as an ES6 module.

### Usage

```javascript
  // As a global method
  Vue.loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
    .then(() => {
      // Script is loaded, do something
    })
    .catch(() => {
      // Failed to fetch script
    });

  // As an instance method inside a component
  this.$loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
    .then(() => {
      // Script is loaded, do something
    })
    .catch(() => {
      // Failed to fetch script
    });
```
Once loaded, the script can be accessed by their usual name in the global scope, as if the script were included in the page's `<head>`.

If you are using a linter to check your code, it may warn on an undefined variable. You will need to instruct your linter to ignore this variable or function. [See here for ESLint instructions](https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals). If you are unable to resolve this in your linter, try prefixing the loaded library's variable/function name with `window.`.

:zap: __New in 1.2!__
If you'd like to remove (unload) the script at any point, then call the companion method `$unloadScript` __with the same URL__.

```javascript
  // As a global method
  Vue.unloadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
    .then(() => {
      // Script was unloaded successfully
    })
    .catch(() => {
      // Script couldn't be found to unload; make sure it was loaded and that you passed the same URL
    });

  // As an instance method inside a component
  this.$unloadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
    .then(() => {
      // Script was unloaded successfully
    })
    .catch(() => {
      // Script couldn't be found to unload; make sure it was loaded and that you passed the same URL
    });
```
In most situations, you can just call `Vue.unloadScript`/`this.$unloadScript` and ignore the returned promise.
