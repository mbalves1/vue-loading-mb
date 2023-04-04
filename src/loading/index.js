
import { defineAsyncComponent } from 'vue';

export function loading(app, options) {
  app.config.globalProperties.$toggleLoading = (loading) => {
    console.log(loading);
    return !loading;
  }
  app.component("loading", defineAsyncComponent(() => import("./Loading.vue")))
  console.log("Hello plugin", options);
}