<script setup>
import {ref} from 'vue'
const title = ref('')
const addTodo = defineEmits(['addTodo'])

function handleSubmit() {
  const value = title.value.trim()
  if(!value) return
  addTodo('addTodo', value)
  title.value = ''
}
</script>

<template>
  <div>
    <input type="text" v-model="title"/>
    <button @click="handleSubmit">Add</button>
  </div>
</template>
<style scoped></style>