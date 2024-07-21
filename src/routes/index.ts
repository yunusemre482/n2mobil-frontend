
import { createMemoryHistory, createRouter } from 'vue-router'

export const routes = [
    {
        path: '/',
        component: () => import('../views/Users.vue')
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router