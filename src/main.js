import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'
import {
    Button,
    Col,
    Row,
    Table,
    TableColumn,
    Form,
    FormItem,
    Collapse,
    CollapseItem,
    Tabs,
    TabPane,
} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.config.productionTip = false
import BaiduMap from 'vue-baidu-map'
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = '/api'
Vue.prototype.$http = axios
import VueTouch from "vue-touch";

Vue.use(VueTouch, {name: "v-touch"});

Vue.use(BaiduMap, {
    ak: 'gGLiP6v3jRwGwKHeuiewTVlAcB1ajieX',
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
