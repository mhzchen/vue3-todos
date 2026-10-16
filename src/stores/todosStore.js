import {defineStore} from 'pinia'
import {ref, computed, watch} from 'vue'

export const useTodosStore = defineStore('todos-store', () => {
    const saved = localStorage.getItem('todos')
    const todos = ref(saved ? JSON.parse(saved) : [])
    const filter = ref('all')

    const filterTodos = computed(() => {
        if (filter.value === 'active') {
            return todos.value.filter(todo => !todo.done)
        } else if (filter.value === 'completed') {
            return todos.value.filter(todo => todo.done)
        }
        return todos.value
    })

    const addTodo = (title) => {
        todos.value.unshift({id: crypto.randomUUID(), title: title, done: false})
    }

    const removeTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const toggleTodo = (id) => {
        const task = todos.value.find(todo => todo.id === id)
        if (task) {
            task.done = !task.done
        }
    }

    watch(todos, (newValue) => {
        localStorage.setItem('todos', JSON.stringify(newValue))
    },{deep: true})

    return {
        todos,
        filter,
        filterTodos,
        addTodo,
        removeTodo,
        toggleTodo
    }
})