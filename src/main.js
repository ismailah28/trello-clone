import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App";
import AppButton from "./components/AppButton";
import router from "./router";
import store from "./store";

Vue.component("AppButton", AppButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
