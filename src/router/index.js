import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Main from '@/views/main/index'
import Event from "../views/event";
import emergency from "../views/emergency";

// import rank from "../views/main/rank";

Vue.use(Router)

import test from '@/components/tets'
import sum from '@/views/main/sum'


export const constantRoutes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/test',
        component: test
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/main',
        component: Main
    },
    {
        path: '/event',
        component: Event
    },
    {
        path: '/emergency',
        component: emergency
    },
    {//测试sum
        path: '/sum',
        component: sum
    }

]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})
