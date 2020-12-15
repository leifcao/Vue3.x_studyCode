
// 防抖函数指令
const debounce = {
  mounted(el, binding) {
    // inserted(el, binding) {
    let timer = null;
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })

  },

}

export default debounce;