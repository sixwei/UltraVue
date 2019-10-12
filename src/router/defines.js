//需要权限验证的路由
export const appRouter = {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('../views/indexCol.vue'),
    meta: {
        menuShow: false
    },
    children:
        [
            {
                path: 'home',
                name: 'home',
                icon: 'home',
                label: '首页',
                component: () => import('../views/home'),
            },
        ]
}

export const NoMenu = [

]

//不需要权限验证的通用路由
export const commonRouters = [
    // {
    //   path: '/login',
    //   name: 'login',
    //   label: '登录',
    //   component: () => import('../views/login')
    // },
    {
        path: '/403',
        name: 'error-403',
        label: '403权限不足',
        component: () => import('../views/error/403.vue')
    },
    {
        path: '/500',
        name: 'error-500',
        label: '500-服务端错误',
        component: () => import('../views/error/500.vue')
    },
    {
        path: '/*',
        name: 'error-404',
        label: '404-页面不存在',
        component: () => import('../views/error/404.vue')
    },
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    appRouter,
    ...NoMenu,
    ...commonRouters,

];
