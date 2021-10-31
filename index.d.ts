import Vue from "vue";

declare module "vue-plugin-load-script";

declare module "vue/types/vue" {
  interface Vue {
    $loadScript: (src: string) => Promise<HTMLScriptElement>;
    $unloadScript: (src: string) => Promise<void>;
  }
}
