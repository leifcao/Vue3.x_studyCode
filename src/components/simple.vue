<script setup>
  import counter from '../methods/useCounter'
  import useMove from '../methods/useMove'

  let {count, add, double} = counter();
  let {x, double: doubleX} = useMove();

  //第二种定义方式
  ref: simple = 0;
  function show() {
    simple++;
    console.log(simple);
  }

</script>

<template>
  <div>
    <p>数值：{{count}}</p>
    <p>double：{{double}}</p>
    <p>移动显示：{{doubleX}}</p>
    <button @click="add">累加</button>
    <button @click="show">simple</button>
  </div>
</template>

<style scoped>

</style>