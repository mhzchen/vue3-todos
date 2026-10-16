<script setup>
defineProps({
  todo:{
    type: Object,
    required: true
  }
})
const emit = defineEmits(['removeTodo', 'toggleTodo'])
</script>
<template>
  <li>
    <input type="checkbox" :checked="todo.done" @change="emit('toggleTodo', todo.id)"> {{todo.title}}
    <button @click="emit('removeTodo', todo.id)">删除</button>
  </li>
</template>
<style scoped></style>