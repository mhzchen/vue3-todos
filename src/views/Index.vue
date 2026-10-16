<script setup>
import {storeToRefs} from 'pinia'
import { useTodosStore } from '@/stores/todosStore'
import {useRouter} from 'vue-router'
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoItems from '@/components/TodoItems.vue'
const router = useRouter()
const todosStore = useTodosStore()
const {filter, filterTodos} = storeToRefs(todosStore)
const {addTodo, removeTodo, toggleTodo} = todosStore


const handleLogout = () => {
  localStorage.removeItem('isLogin')
  router.push('/login')
}
</script>
<template>
  <TodoHeader></TodoHeader>
  <TodoInput @addTodo="addTodo"></TodoInput>
  <TodoFilter v-model="filter"></TodoFilter>
  <TodoItems v-for="todo in filterTodos" :key="todo.id" :todo="todo" @removeTodo="removeTodo" @toggleTodo="toggleTodo"></TodoItems>
  <button @click="handleLogout">一键登出</button>
</template>
<style scoped>

</style>