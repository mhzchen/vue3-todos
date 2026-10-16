<script setup>
import {computed} from 'vue'
import {storeToRefs} from 'pinia'
import {useTodosStore} from "@/stores/todosStore"

const todosStore = useTodosStore()

const {todos} = storeToRefs(todosStore)

const process = computed(() => {
  const total = todos.value.length
  if (total === 0) return 0
  const process = todos.value.filter(todo => todo.done).length / todos.value.length
  return Math.round(process * 100)
})
</script>
<template>
 <div>完成进度：{{process}}%</div>
</template>
<style scoped></style>