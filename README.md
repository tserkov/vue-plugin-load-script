# vue-plugin-load-script [![license](https://img.shields.io/github/license/tserkov/go-plugin-load-script.svg)]()
A Vue plugin for injecting remote scripts.

## Install

``` bash
# npm
npm install --save-dev vue-plugin-load-script
```

``` bash
# yarn
yarn add --dev vue-plugin-load-script
```

## Use

```javascript
  // In main.js
  import LoadScript from 'vue-plugin-load-script';

  Vue.use(LoadScript);
```

```javascript
  // In any component or function
  Vue.loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
    .then(() => {
      // Script is loaded, do something
    })
    .catch(() => {
      // Failed to fetch script
    });
```
