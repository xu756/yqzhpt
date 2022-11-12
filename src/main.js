import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'
import {
    Button
} from "element-ui";

Vue.use(Button)

Vue.config.productionTip = false
import BaiduMap from 'vue-baidu-map'
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'api/'
Vue.prototype.$http = axios
Vue.use(BaiduMap, {
    ak: 'gGLiP6v3jRwGwKHeuiewTVlAcB1ajieX'
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
