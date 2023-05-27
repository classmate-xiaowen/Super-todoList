import { createRouter , createWebHashHistory} from "vue-router"

const routes = [
    {
        path:'/today',
        name:'今日待办',
        component:() => import('../views/today.vue')
    },
    {
        path:'/taskList',
        name:'定制任务',
        component:() => import('../views/taskList.vue')
    },
    {
        path:'/show',
        name:'数据展示',
        component:() => import('../views/show.vue')
    },
    {
        path:'/',
        redirect:'/today'
     }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router