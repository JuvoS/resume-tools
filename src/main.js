import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";
import VueResource from "vue-resource";
import htmlToPdf from "@/utils/htmlToPdf";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(iView);
Vue.use(htmlToPdf);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
