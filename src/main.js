import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'

Vue.config.productionTip = false
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
    ak: 'gGLiP6v3jRwGwKHeuiewTVlAcB1ajieX'
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
