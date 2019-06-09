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
    },
    {
        path: '/cascader',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/cascader/cascader.vue'], resolve)
    },
    {
        path: '/selectlist',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/select/selectList.vue'], resolve)
    },
    {
        path: '/tabs',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/tabs/tabs.vue'], resolve)
    },
    {
        path: '/subject',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/subject/subject.vue'], resolve)
    },
    {
        path: '/steps',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/steps/steps.vue'], resolve)
    },
    {
        path: '/setInterval',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/setInterval/setInterval.vue'], resolve)
    },
    {
        path: '/table',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/table/tableColumn.vue'], resolve)
    },
    {
        path: '/table/renderHeader',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/table/renderHeader.vue'], resolve)
    },
    {
        path: '/promise',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/promise/promise.vue'], resolve)
    },
    {
        path: '/modal',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/modal/modal.vue'], resolve)
    },
    {
        path: '/modal/dragdrop',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/modal/modalDragdrop.vue'], resolve)
    },
    {
        path: '/dropdown',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/dropdown/dropdown.vue'], resolve)
    },
    {
        path: '/regexp',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/regExp/regExp.vue'], resolve)
    }
];
export default routers;
