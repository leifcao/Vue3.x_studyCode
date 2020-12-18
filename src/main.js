import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from'./router/router'
//导入store
import store from "./store/store";
import './index.css'
// 引用指令 懒加载
import LazyLoad from './directive/lazyLoad'

// 一些普通指令
import directives from "./directive/directives";



const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

// 图片懒加载设置默认图片
app.use(LazyLoad, {
  default: 'src/assets/logo.png',
})

app.use(directives);