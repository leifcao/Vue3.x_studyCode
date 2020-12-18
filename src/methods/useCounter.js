import {ref, computed} from 'vue';

// 累加器
export default function useCounter() {

  let count = ref(0);
  const add = () => {count.value++};
  const double = computed(() => count.value * 2);
  return {count, add, double}
}

