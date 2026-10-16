import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: '登录',
            requireLogin: false
        }
    },
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
        meta: {
            title: '首页',
            requireLogin: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('isLogin')
    if (to.meta.requireLogin && !isLogin) {
        next('/login')
    } else if (to.path === '/login' && isLogin) {
        next('/')
    } else {
        next()
    }
})

export default  router