<template>
  <h1>{{ msg }}</h1>
  <div class="main">
    <h2>setup的使用</h2>
    <p class="detail">setup 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。
      创建组件实例，然后初始化 props ，紧接着就调用 setup 函数。从生命周期钩子的视角来看，它会在 beforeCreate 钩子之前被调用。</p>
    <h2>ref</h2>
    <p class="detail">接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。</p>
    <span>count is:{{ count }}</span>&nbsp;<button @click="countClick">+1</button>
    <img src="../assets/exampleImage/refImage.png" alt="">
    <img src="../assets/exampleImage/ref.png" alt="">
    <h2>reactive</h2>
    <p class="detail">接收一个普通对象然后返回响应式的对象。等同于 2.x 的 Vue.observable()</p>
    <span>state.count :{{ state.count }}</span>&nbsp;<button @click="countState">+1</button>
    <img src="../assets/exampleImage/reactiveImage.png" alt="">
    <img src="../assets/exampleImage/reactive.png" alt="">

    <h2>watch</h2>
    <p class="detail">watch 需要侦听特定的数据源，并在回调函数中执行副作用。默认情况是懒执行的，也就是说仅在侦听的源变更时才执行回调。</p>
    <img src="../assets/exampleImage/watch.png" alt=""  >
    <img src="../assets/exampleImage/watchImage.png" alt="">

    <h2>watchEffect</h2>
    <p class="detail">立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。</p>
    <p class="detail different"><i>区别：</i>1、watch是需要传入需要侦听特定的数据源，而watchEffect是自动收集需要侦听特定的数据源。
      2、watch可以访问侦听状态变化前后的值，而watchEffect没有。
      3、watch是属性改变的时候执行，而watchEffect是默认会执行一次，然后属性改变也会执行。</p>
    <img src="../assets/exampleImage/watchEffect.png" alt="">
    <img src="../assets/exampleImage/watchEffectImage.png" alt="">

    <h2>computed</h2>
    <p class="detail">传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。或者传入一个拥有 get 和 set 函数的对象，创建一个可手动修改的计算状态。</p>
    <span>两数相加：{{total}}</span>
    <img src="../assets/exampleImage/computedImage.png" alt="">
    <img src="../assets/exampleImage/computed.png" alt="">
    <h4 style="text-align: left">computed的全选操作</h4>
    <input type="checkbox" id="all" v-model="checkAll"><label for="all">全部选择</label>
    <input type="checkbox" id="JavaScript" value="JavaScript" v-model="checkName"><label for="all">JavaScript</label>
    <input type="checkbox" id="Html" value="Html" v-model="checkName"><label for="Html">Html</label>
    <input type="checkbox" id="Css" value="Css" v-model="checkName"><label for="Css">Css</label>
    <p>选择的类型：{{checkName}}</p>
    <img src="../assets/exampleImage/computed_allHtml.png" alt="">
    <img src="../assets/exampleImage/computed_all.png" alt="">

    <!--  slot插槽  -->
    <h2>slot</h2>
    <model v-if="modelShow" @close="closeModel">
      <p>message，插槽展示信息</p>
    </model>

    <!--  路由跳转  -->
    <h2>路由跳转</h2>
    <button @click="RouterClick">路由跳转</button>

    <!--  父子传值  -->
    <h2>组件通信父-子（可跨代组件通信）</h2>

    <h2>directive---懒加载</h2>
    <p class="detail">使用指令的方式 v-lazy= "'img.png'"</p>
    <img v-lazy="'src/assets/exampleImage/lazy1.jpg'" alt="">
    <img v-lazy="'src/assets/exampleImage/lazy2.jpg'" alt="">
    <img v-lazy="'src/assets/exampleImage/lazy3.jpg'" alt="">

    <h2>directive---点击防抖</h2>
    <p class="detail">使用指令的方式 v-debounce="event()" ，详情见文件src/directive/debounce.js</p>
    <div>
      <span>state.count :{{ state.count }}</span>&nbsp;<button v-debounce="countState">+1</button>

    </div>

    <h2>directive---拖拽</h2>
    <p class="detail">使用指令的方式 v-draggable ，详情见文件src/directive/darggable.js</p>
    <div class="parent" style="position:relative;background:cadetblue;height: 500px">
      <div v-draggable style="position:absolute;width: 100px;height: 100px;background:cornflowerblue;">message</div>
    </div>

    <simple></simple>

  </div>
  <p class="bottom">Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
  import {ref, reactive, watch, watchEffect, computed, provide, readonly} from "vue";
  // 使用路由跳转
  import {useRoute, useRouter} from "vue-router";
  import model from './model.vue';

  import simple from './simple.vue';

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data: () => ({
      toliist: [1, 2, 3, 4]
    }),
    // 通信-父子信息
    provide() {
      return {
        todoLength: computed(() => this.toliist.length)
      }
    },
    setup(props) {
      // ref的使用
      const count = ref(0);
      const countClick = () => count.value++;
      //reactive的使用
      const state = reactive({count: 0});
      const countState = () => state.count++;

      //watch的使用
      watch(() => count.value, (newVal, oldVal) => {
        console.log(newVal, oldVal, 'count发生改变')
      })

      // wathcEffect的使用
      watchEffect(() => {
        console.log('state改变', state.count)
      })

      // computed的使用
      const total = computed(() => count.value + state.count);

      // computed的全选监听
      const checkName = ref([]);
      // 对checkAll的监听
      const checkAll = computed({
        get() {
          // 先获取值返回true || false
          // console.log(checkName.value,'信息')
          return checkName.value.length === 3;
        },
        set(value) {
          // get获取的值去设置
          checkName.value = value ? ["JavaScript", "Html", "Css"] : [];
        }
      });

      // 插槽
      const modelShow = ref(true);
      const closeModel = () => {
        modelShow.value = !modelShow.value;
      }

      // 路由
      const router = useRouter();
      const route = useRoute();
      const RouterClick = () => {
        // router.push({
        //   name: 'testRouter',
        //   query: {
        //     ...route.query,
        //   }
        // })
        // console.log(store.commit('increment'))
        router.push('/testRouter')
      }

      //通信-父子信息
      provide('number1', readonly(count)); //只读
      provide('number2', state);

      return {
        count, countClick,
        state, countState,
        total,
        checkName, checkAll,
        modelShow, closeModel,
        RouterClick,
      }
    },
    components: {
      model,simple
    }
  }
</script>

<style>
  .main {
    width: 700px;
    margin: auto;
    letter-spacing: 1px;
  }

  h2 {
    text-align: left;
  }

  .main .detail {
    text-align: left;
    text-indent: 15px;
    padding: 5px;
    background: #eeeeee;
  }

  .main i {
    font-style: normal;
    color: red;
  }

  .main .different {
    background: #b3e7f0;
  }

  .main > img {
    width: 100%;
  }


  .bottom {
    margin-top: 10px;
  }
</style>