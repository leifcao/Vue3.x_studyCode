const lazyload = {
  /**
   * 指令使用
   * @Vue 实例
   * @option 默认图片设置
   **/
  install(Vue, option) {
    const defaultImg = option.default;
    Vue.directive('lazy', {
      // Vue2.0使用
      // bind(el, binding) {
      //   //初始化获取img的src
      //   lazyload.init(el, binding.value, defaultImg);
      // },
      // inserted(el) {
      //   //  兼容性绑定 chrome
      //   if (IntersectionObserver) {
      //     lazyload.Observe(el);
      //   } else {
      //     lazyload.listenerScroll(el);
      //   }
      // }
      // Vue3.x 的使用方式
      beforeMount(el, binding) {
        lazyload.init(el, binding.value, defaultImg);
      },
      mounted(el) {
        // 兼容性绑定 chrome
        if (IntersectionObserver) {
          lazyload.Observe(el);
        } else {
          lazyload.listenerScroll(el);
        }
      }
    })

  },
  /**
   * @el 绑定的元素
   * @value 绑定元素的值
   * @default 默认图片
   **/
  init(el, value, defaultImg) {
    // 设置需要加载的图片
    el.setAttribute('data-src', value);
    // 设置默认图片
    el.setAttribute('src', defaultImg);
  },

  /**
   * IntersectionObserver监听el
   * @el 绑定的元素
   **/
  Observe(el) {
    var io = new IntersectionObserver((entries, self) => {
      entries.forEach(item => {
        let src = item.target.dataset.src;
        // 是否出现在可视区域 && 图片存在
        if (entries[0].isIntersecting && src) {
          el.src = src;
          el.removeAttribute('data-src');
          // 解除观察
          self.unobserve(el);
        }
      })
    });

    // 调用监听方法 自带的observe
    io.observe(el);
  },
  /**
   * 默认滚动监听方式
   * @el 绑定的元素
   **/
  listenerScroll(el) {
    // 滚动监听 + 节流
    window.addEventListener('scroll', lazyload.throttle(lazyload.load(el), 300));
  },

  load(el) {
    // 获取页面可是区域
    let viewHeight = document.documentElement.clientHeight;
    // 图片距离顶部的距离
    const elTop = el.getBoundingClientRect().top;
    // 图片距离底部的距离
    const elBottom = el.getBoundingClientRect().bottom;
    // 图片路径
    const src = el.dataset.src;
    // 可视区范围内
    if (elBottom > 0 && elTop - viewHeight < 0) {
      // 有图片
      if (src) {
        el.src = src;
        el.removeAttribute('data-src');
      }
    }
  },

  // 节流函数
  throttle(fn, delay) {
    let pretime, timer;
    return function () {
      let _this = this;
      const curtime = Date.now(); // 记录当前时间
      if (!pretime) pretime = curtime;
      if (curtime - pretime > delay) {  // 超过限定时间立即执行
        pretime = curtime;
        fn.apply(_this, arguments);
        clearTimeout(timer);
        return;
      }

      timer = setTimeout(() => {
        pretime = Date.now(); // 记录当前时间
        timer = null;
        fn.apply(_this, arguments);
      }, delay);
    }
  }
}

export default lazyload;