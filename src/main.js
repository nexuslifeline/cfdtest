import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { router } from './router';

import VueGraph from 'vue-graph'

Vue.use(VueGraph);

// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'
 
/* Register component with one of 2 methods */
 
import Icon from 'vue-awesome/components/Icon'
 
// globally (in your main .js file)
Vue.component('v-icon', Icon)

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  components: {
    'v-icon': Icon
  }
}).$mount('#app')
