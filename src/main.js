import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGoodTablePlugin from 'vue-good-table';
import Vue2Editor from "vue2-editor";
import { store } from "./store";

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'




Vue.use(Vue2Editor);
Vue.use(VueGoodTablePlugin);

Vue.prototype.$eventBus = new Vue();
Vue.prototype.$cookies = VueCookies;
Vue.prototype.$axios = axios;


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.config.productionTip = false

new Vue({
    router,
    store: store,
  render: h => h(App),
}).$mount('#app')
