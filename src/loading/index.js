
import { defineAsyncComponent } from 'vue';

export function loading(app, options) {
  app.config.globalProperties.$toggleLoading = (loading) => {
    console.log(loading);
    return !loading;
  }
  console.log(options);
  console.log('1');
  console.log('2');
  app.component("loading", defineAsyncComponent(() => import("./Loading.vue")))

}