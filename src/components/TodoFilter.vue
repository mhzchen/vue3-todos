<script setup>
const modelValue = defineModel()
const filters = ['all', 'active', 'completed']
</script>
<template>
  <button
      v-for="f in filters"
      :key="f"
      :class="[modelValue === f ? 'active' : '']"
      @click="modelValue=f">
    {{f}}
  </button>
</template>
<style scoped>
.active{
  color: red;
 background-color: pink;
}
</style>