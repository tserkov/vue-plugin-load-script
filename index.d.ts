import Vue, { App } from "vue";

declare module "vue-plugin-load-script";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $loadScript: (src: string) => Promise<HTMLScriptElement>;
    $unloadScript: (src: string) => Promise<void>;
  }
}

export default class LoadScript {
  static install(app: App): void;
}

export function loadScript(src: string): Promise<HTMLScriptElement>;
export function unloadScript(src: string): Promise<void>;
