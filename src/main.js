import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import {Router, BrowserDriver, installer} from 'vue-stack-router';
import routes from './router';
import Moment from 'moment'
import Lodash from 'lodash'

Vue.prototype.$moment = Moment;
Vue.prototype.$lodash = Lodash;
// 引入flex适应
import 'lib-flexible'

const driver = new BrowserDriver({mode: 'history'});
const router = new Router({routes}, driver);
Vue.use(installer, {router});

Vue.config.productionTip = false;

import touch from 'vue-directive-touch';

Vue.use(touch);
// 注册必须组件
import Layout from '@/layout/Layout'

Vue.component('Layout', Layout);
// 引入UI框架
import Vant from 'vant'

Vue.use(Vant);


import 'vant/lib/index.less'

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
