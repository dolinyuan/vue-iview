<template>
    <div style="width:500px;margin:0 auto;">
        <div class="echarts-box">
            <div id="myChart" :style="{width: '500px', height: '500px'}"></div>
        </div>
        <div class="dropdown-box">
            <Dropdown trigger="custom" :visible="visible" @on-clickoutside="checkQuery">
                <Button type="primary" @click="openList">选择</Button>
                <DropdownMenu slot="list">
                    <CheckboxGroup v-model="checkdata">
                        <ul>
                            <li>
                                <Checkbox label="邮件营销"></Checkbox>
                            </li>
                            <li>
                                <Checkbox label="联盟广告"></Checkbox>
                            </li>
                            <li>
                                <Checkbox label="视频广告"></Checkbox>
                            </li>
                            <li>
                                <Checkbox label="直接访问"></Checkbox>
                            </li>
                            <li>
                                <Checkbox label="搜索引擎"></Checkbox>
                            </li>
                        </ul>
                    </CheckboxGroup>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')

    import config from '../../config/config'
    export default {
        name: "DropDown",
        data(){
            return{
                checkdata:[],
                data:[],
                visible:false,
            }
        },
        computed:{
            options(){
                let defaultOptions = this.setOptions();
                if(this.checkdata.length === 0){
                    return defaultOptions;
                }else{
                    let options = Object.assign({},defaultOptions);
                    let data = [];

                    defaultOptions.series.forEach((item,index) => {
                        if(this.checkdata.indexOf(item.name) != -1){
                            data.push(item);
                        }
                    })
                    console.log("computed options", this.defaultOptions);
                    options.legend.data = this.checkdata;
                    options.series = data;

                    return options;
                }
            }
        },
        watch:{
            options:{
                handler(newVal,oldVal){
                    //this.checkQuery(); //实时，弃用，不友好
                }
            },
        },
        mounted(){
            this.$nextTick(function () {
                this.drawLine();
            })
        },
        methods:{
            openList(){
                this.visible = true;
            },
            checkQuery(){
                this.visible = false;
                this.drawLine();
            },
            drawLine() {
                console.log("options =>",this.options.series);
                // 基于准备好的dom，初始化echarts实例
                //let myChart = this.$echarts.init(document.getElementById('myChart'))
                let myChart = echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption(this.options,true);
            },
            setOptions(){
                let options = {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    grid: {
                        left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                            boundaryGap: false,
                            data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
                return options;
            }
        }
    }
</script>

<style scoped>
    .dropdown-box{}
    .echarts-box{}
</style>