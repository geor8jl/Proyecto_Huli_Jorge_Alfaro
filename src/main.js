import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueTelInputVuetify,{
  vuetify,
});


new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
