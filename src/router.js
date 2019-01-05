const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/form-item',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/formitem/FormItem.vue'], resolve)
    }
];
export default routers;