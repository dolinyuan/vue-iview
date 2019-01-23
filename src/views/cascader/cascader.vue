<template>
    <div>
        <Cascader :data="data" v-model="value"></Cascader>
    </div>
</template>

<script>
    export default {
        name: "cascader",
        data(){
            return{
                value:['最近24小时','1hour'],
                data:[
                    {
                        value:'最近24小时',
                        label:'最近24小时',
                        children:[
                            {
                                value:'1hour',
                                label:'1hour',
                            },
                            {
                                value:'5min',
                                label:'5min',
                            }
                        ]
                    },
                    {
                        value:'最近7天',
                        label:'最近7天',
                        children:[
                            {
                                value:'1day',
                                label:'1day',
                            },
                            {
                                value:'1hour',
                                label:'1hour',
                            }
                        ]
                    },
                    {
                        value:'最近1个月',
                        label:'最近1个月',
                        children:[
                            {
                                value:'1day',
                                label:'1day',
                            },
                            {
                                value:'1hour',
                                label:'1hour',
                            }
                        ]
                    },
                    {
                        value:'最近1年',
                        label:'最近1年',
                        children:[
                            {
                                value:'1day',
                                label:'1day',
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
