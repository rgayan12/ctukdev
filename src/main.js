import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/bootstrap-grid.css";
import axios from "axios";
import BackToTop from "vue-backtotop";

import NProgress from "nprogress";
import 'nprogress/nprogress.css';





Vue.config.productionTip = false;
Vue.prototype.$http = axios;



// Add a request interceptor
axios.interceptors.request.use(function (config) {
  NProgress.start()
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  NProgress.done()
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});



Vue.use(BackToTop);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
