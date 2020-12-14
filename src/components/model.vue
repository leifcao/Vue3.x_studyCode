<template>
  <div class="model">
    <slot></slot>
    <p>{{number1}}-{{number2.count}}</p>
    <button @click="$emit('close')">关闭</button>
  </div>
</template>

<script>
  import {inject} from "vue";

  export default {
    name: "model",
    emits:["close"],
    // 接收父组件传过来的
    inject: ['todoLength'],
    created() {
      console.log(`Injected property: ${this.todoLength.value}`)
    },
    setup() {
      // 接收父组件传过来的
      const number1 = inject('number1')
      const number2 = inject('number2');
      return {
        number1,number2
      }
    }
  }
</script>

<style scoped>

</style>