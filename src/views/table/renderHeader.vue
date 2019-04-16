<template>
    <div>
        <Dropdown>
            <Button type="primary">
                切换语言:{{currentLanguage}}
                <Icon type="arrow-down-b"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <!--
                    DropdownItem 这里必须用 @click.native 绑定点击事件
                 -->
                <DropdownItem v-for="(item,key) in language" :key="item.id" @click.native="changeLanguage(key)">
                    {{ item }}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <p></p>
        <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        <Table :columns="columns" :data="dataTable"></Table>
    </div>
</template>

<script>
    import Vue from "vue";
    export default {
        name: "renderHeader",
        data(){
            return{
                currentLanguage: "",
                language: {
                    "zh-CN": "中文",
                    "en-US": "English"
                },
                columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        renderHeader: (h, params) => {
                            return h('div',[
                                h('div',{
                                    props:{
                                        type:"text",
                                        size:"small"
                                    }
                                },this.$t('buttonStr'))
                            ])
                        }
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                dataTable: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
            }
        },
        methods:{
            changeLanguage: function(key) {
                Vue.config.lang = key;
                this.currentLanguage = this.language[key];
            }
        }
    }
</script>

<style scoped>

</style>