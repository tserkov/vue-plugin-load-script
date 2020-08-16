# vue-plugin-load-script [![license](https://img.shields.io/github/license/tserkov/vue-plugin-load-script.svg)]()

A Vue plugin for injecting remote scripts.

## Install

```bash
# npm
npm install --save vue-plugin-load-script
```

```bash
# yarn
yarn add vue-plugin-load-script
```

## Use

```javascript
// In main.js
import LoadScript from "vue-plugin-load-script";

app.use(LoadScript);
```

```javascript
// As an instance method inside a component
this.$loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
  .then(() => {
    // Script is loaded, do something
  })
  .catch(() => {
    // Failed to fetch script
  });
```

:zap: **New in 1.2!**
If you'd like to remove (unload) the script at any point, then call the companion method `$unloadScript` **with the same URL**.

```javascript
// As an instance method inside a component
this.$unloadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
  .then(() => {
    // Script was unloaded successfully
  })
  .catch(() => {
    // Script couldn't be found to unload; make sure it was loaded and that you passed the same URL
  });
```

In most situations, you can just call `this.$unloadScript` and ignore the returned promise.
