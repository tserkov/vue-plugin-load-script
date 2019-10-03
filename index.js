const LoadScript = {
  install: function (Vue) {
    Vue.loadScript = Vue.prototype.$loadScript = function (src) { // eslint-disable-line no-param-reassign
      return new Promise(function (resolve, reject) {
        if (document.querySelector('script[src="' + src + '"]')) {
          resolve();

          return;
        }

        const el = document.createElement('script');

        el.type = 'text/javascript';
        el.async = true;
        el.src = src;

        const rejector = () => {
          // After a failed script load, remove the script
          // element to permit future loads. (#13)
          document.head.removeChild(el);
          reject();
        };

        el.addEventListener('load', resolve);
        el.addEventListener('error', rejector);
        el.addEventListener('abort', rejector);

        document.head.appendChild(el);
      });
    };

    Vue.unloadScript = Vue.prototype.$unloadScript = function (src) { // eslint-disable-line no-param-reassign
      return new Promise(function (resolve, reject) {
        const el = document.querySelector('script[src="' + src + '"]');

        if (!el) {
          reject();

          return;
        }

        document.head.removeChild(el);

        resolve();
      });
    };
  },
};

export default LoadScript;
