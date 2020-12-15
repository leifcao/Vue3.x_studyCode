//拖拽函数
const draggable = {
  mounted(el) {

    el.style.cursor = 'move'
    el.onmousedown = e => {
      let left, top, parentWid, parentHei;
      //算出鼠标相对元素的位置
      let startLeft = e.clientX - el.offsetLeft;
      let startTop = e.clientY - el.offsetTop;

      // 获取父级节点 的宽高
      parentWid = e.target.parentNode.clientWidth;
      parentHei = e.target.parentNode.clientHeight;

      document.onmousemove = e => {
        let moveLeft = e.clientX - startLeft;
        let moveTop = e.clientY - startTop;


        // 边界设置  先求最小
        left = Math.min(moveLeft, parentWid - el.offsetWidth);
        left = Math.max(0, left);

        top = Math.min(moveTop, parentHei - el.offsetHeight);
        top = Math.max(0, top);

        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
      }

      document.onmouseup = () => {
        //释放监听
        document.onmousemove = document.onmouseup = null;
      }
    }
  }
}

export default draggable;