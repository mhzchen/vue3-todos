<script setup>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
const router = useRouter()
const isLogin = ref(false)
const handleLogin = () => {
  isLogin.value = true
  localStorage.setItem('isLogin', isLogin.value)
  setTimeout(() => {
    router.push('/')
    isLogin.value = false
  }, 1000)
}
</script>
<template>
  <h3>欢迎回来</h3>
  <button @click="handleLogin()">一键进入系统</button>
  <div>测试环境，点击即可登录</div>
</template>
<style scoped>

</style>