
import { defineAsyncComponent } from 'vue';

export function loading(app, options) {
  app.config.globalProperties.$toggleLoading = (loading) => {
    console.log(loading);
    return !loading;
  }
  console.log(options);
  console.log('1');
  app.component("loading", defineAsyncComponent(() => import("./Loading.vue")))

}