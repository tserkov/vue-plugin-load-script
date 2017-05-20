const LoadScript = {
  install(Vue) {
    Vue.loadScript = src => ( // eslint-disable-line no-param-reassign
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src='${src}']`)) {
          resolve();

          return;
        }

        const el = document.createElement('script');

        el.type = 'text/javascript';
        el.async = true;
        el.src = src;

        el.addEventListener('load', resolve);
        el.addEventListener('error', reject);
        el.addEventListener('abort', reject);

        document.head.appendChild(el);
      })
    );
  },
};

export default LoadScript;
