// 点击防抖指令
import debounce from './debounce'
// 点击拖拽
import draggable from "./draggable";

const directives = {
  debounce,
  draggable
}

export default {
  install(Vue) {
    Object.keys(directives).forEach(item => {
      Vue.directive(item, directives[item]);
    })
  }
}
