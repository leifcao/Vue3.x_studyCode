<template>
  <img alt="Vue logo" src="./assets/logo.png" />
<!--  <HelloWorld msg="Welcome Hello Vue 3.0 + Vite" />-->
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // data:()=>({
  //
  // }),
  components: {
    HelloWorld
  },
  setup(){

  }
}
</script>

<style scoped>
  img{
    width: 100px;
    height: 100px;
  }
</style>
