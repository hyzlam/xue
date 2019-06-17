import Vue from 'vue'
import App from './App.vue'
import './common/stylus/index.styl'
import router from "./router/index.js"
Vue.config.productionTip = false;
import VueResource from "vue-resource";
import VueLazyload from 'vue-lazyload'
import store from "./store/index.js"
import iView from 'iview';

import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(VueResource);



Vue.use(VueLazyload, {
 loading:require('@/common/image/default.png')
})
new Vue({
 router,
 store,
  render: h => h(App)
}).$mount('#app')
