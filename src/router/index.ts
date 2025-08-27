import { createRouter, createWebHistory } from "vue-router";
//createRouter方法创建路由实例;
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }

    ],
    //滚动条的控制
        scrollBehavior() {
            return {
                left: 0 , 
                top: 0 
            }
        }
})
