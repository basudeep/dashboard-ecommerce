import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePageTitle from 'vue-page-title'
import axios from 'axios'
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8000'


Vue.use(VuePageTitle, {
  suffix: '- Ecommerce Dashboard'
})
Vue.mixin({
  methods: {
    toastNotification:  function (message,type) {
       Vue.$toast.open({
        message,
        type,
        position:'top-right',
    });
    },
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
