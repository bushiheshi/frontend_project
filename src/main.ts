import { createApp } from 'vue'

//引入清除默认样式
import '@/style/reset.scss'

import App from '@/App.vue'
//引入全局组件--top
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
//引入路由
import router from '@/router/index.ts';
//引入element-plus插件
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);

app.use(router);
app.use(ElementPlus);

app.mount('#app');
