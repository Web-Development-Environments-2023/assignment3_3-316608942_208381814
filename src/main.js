import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueCookies from "vue-cookies";

import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueCookies);

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
// axios.defaults.withCredentials=true;
import { state } from "./store.js"; 
import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

// axios.interceptors.request.use(
//   function(config) {
//     try {
//       // Retrieve data from local storage
//       const data = localStorage.getItem(localStorage.key(0));
//       if (data) {
//         // Add the data to the request headers
//         config.headers = {
//           ...config.headers,
//           "x-localstorage-data": data,
//         };
//       }
//     } catch (error) {
//       // Handle the error if any
//       console.error("Error retrieving data from local storage:", error);
//     }

//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
); 

// // Add a response interceptor
// axios.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
  username: localStorage.username,
  search_url_: localStorage.search_url,
  server_domain: "http://localhost:3000",
  //server_domain: "http://127.0.0.1:3000",
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
    VueCookies.set(this.username,this.username);
    // console.log(VueCookies.get("session"));
    // this.$cookies.set('session', user.user_id, '24h'); // Set the session cookie for 24 hours
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    VueCookies.remove(this.username);
    this.username = undefined;
    // this.$cookies.remove('session');
  },
};
console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
