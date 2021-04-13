const LoadScript = {
  install: function(Vue) {
    Vue.loadScript = Vue.prototype.$loadScript = (source, root = "head") => {
      return new Promise((resolve, reject) => {
        let el;
        let shouldAppend = false;

        if (typeof source === "object") {
          source.forEach((src) => {
            el = checkScript(src);

            if (!el) {
              el = createScript(src);
              shouldAppend = true;
            } else if (el.hasAttribute("data-loaded")) {
              resolve(el);
              return;
            }

            el.addEventListener("error", reject);
            el.addEventListener("abort", reject);
            el.addEventListener("load", function loadScriptHandler() {
              el.setAttribute("data-loaded", true);
              resolve(el);
            });

            if (shouldAppend)
              document.getElementsByTagName(root)[0].appendChild(el);
          });
        } else if (typeof source === "string") {
          el = checkScript(source);

          if (!el) {
            el = createScript(source);
            shouldAppend = true;
          } else if (el.hasAttribute("data-loaded")) {
            resolve(el);
            return;
          }

          if (shouldAppend)
            document.getElementsByTagName(root)[0].appendChild(el);
        }
      });
    };

    Vue.unloadScript = Vue.prototype.$unloadScript = (source, root) => {
      return new Promise((resolve, reject) => {
        let el;

        if (typeof source === "object") {
          source.forEach((src) => {
            el = checkScript(src);

            if (!el) {
              reject();
              return;
            }

            document.getElementsByTagName(root)[0].removeChild(el);

            resolve();
          });
        } else if (typeof source === "string") {
          el = checkScript(source);

          if (!el) {
            reject();
            return;
          }

          document.getElementsByTagName(root)[0].removeChild(el);

          resolve();
        }
      });
    };
  },
};

const checkScript = (src) => {
  return document.querySelector('script[src="' + src + '"]');
};

const createScript = (src) => {
  let el = document.createElement("script");
  el.type = "text/javascript";
  el.async = true;
  el.src = src;

  return el;
};

export default LoadScript;