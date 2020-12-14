import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from'./router/router'
//导入store
import store from "./store/store";
import './index.css'
// 引用指令 懒加载
import LazyLoad from './directive/lazyLoad.js'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

app.use(LazyLoad, {
  default: 'src/assets/logo.png',
})