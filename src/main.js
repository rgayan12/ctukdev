import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/bootstrap-grid.css";
import axios from "axios";
import BackToTop from "vue-backtotop";
;


Vue.config.productionTip = false;
Vue.prototype.$http = axios;





Vue.use(BackToTop);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
