// import Vue from 'vue'
// // import { Button, Select } from 'element-ui'
// import App from './App.vue'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
// /* 或写为
// Vue.use(Button)
// Vue.use(Select)
//  */

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  // render: h => h(App)
  render: h => h(App)
})
