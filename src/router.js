const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/form-item-repeat-name',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/formitem/FormItemRepeatName.vue'], resolve)
    },
    {
        path: '/form-item-prop-diy',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/formitem/FormItemPropDiy.vue'], resolve)
    },
    {
        path: '/canvas-svg',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/CanvasSvg/canvas.vue'], resolve)
    },
    {
        path: '/echarts',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/echarts/echarts.vue'], resolve)
    }
];
export default routers;
