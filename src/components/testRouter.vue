<template>
  <div class="main">
    <h2>路由的引入</h2>
    <p class="detail">cmd控制台：npm i vue-router@next</p>
    <img src="../assets/exampleImage/RouterImport.png" alt="">
    <img src="../assets/exampleImage/RouterView.png" alt="">
    <h2>Vue路由和Composition API</h2>
    <p class="detail">
      当我们使用router-link标签时是一点毛病也没有，但是当需要编程式路由跳转的时候沙雕了，没有this咋调用router啊！难道还要再写一个methods在里面操作吗（黑人问号），还好这里咱们的router给了解决办法，看下图：</p>
    <img src="../assets/exampleImage/RouterToImage.png" alt="">
    <img src="../assets/exampleImage/RouterToJs.png" alt="">

    <h2>路由插槽</h2>
    <p class="detail">例子</p>
    <router-link to="/" v-slot="{navigate,isActive}">
      <li :class="{'active': isActive }" @click="navigate">
        <span>home</span>
      </li>
    </router-link>
  </div>
</template>

<script>

  export default {
    name: "testRouter",
    data: () => ({
      isActive: true,
    }),
    setup(){
      const navigate = () => console.log('路由插槽');
      return{
        navigate,
      }
    }

  }
</script>

<style scoped>

</style>