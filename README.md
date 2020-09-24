# vue-plugin-load-script [![license](https://img.shields.io/github/license/tserkov/vue-plugin-load-script.svg)]()
A Vue plugin for injecting remote scripts.

Compatible with Vue 3.

For Vue 2, see [the master branch](/tserkov/vue-plugin-load-script/tree/master).

## Install

``` bash
# npm
npm install --save vue-plugin-load-script@">=2.0.0"
```

``` bash
# yarn
yarn add vue-plugin-load-script@">=2.0.0"
```

## Use

```javascript
  // In main.js
  import { createApp } from "vue";
  import LoadScript from "vue-plugin-load-script";

  const app = createApp(App);
  app.use(LoadScript);

  app.mount("#app");
```

```javascript
  // There are 2 ways of using the function:
  // By importing the function
  import { loadScript } from "vue-plugin-load-script";
  loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
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

If you'd like to remove (unload) the script at any point, then call the companion method `unloadScript` / `this.$unloadScript` __with the same URL__.

```javascript
  // There are 2 ways of using the function:
  // By importing the function
  import { unloadScript } from "vue-plugin-load-script";
  unloadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
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
In most situations, you can just call `unloadScript` / `this.$unloadScript` and ignore the returned promise.
