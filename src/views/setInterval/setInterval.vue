<template>
    <div style="margin-top:20px;">
        <p>state {{taskDetails.state}}</p><br>
        <p>currentIndex {{currentIndex}}</p>
        <p>status {{status}}</p>
        <Steps :current="currentIndex" :status="status">
            <Step v-for="item in stepItems" title="已完成" content="">{{item}}</Step>
        </Steps>
        <button @click="click1">按钮1</button>
        <button @click="click2">按钮2</button>
        <button @click="click3">按钮3</button>
        <button @click="click4">按钮4</button>
        setInterval
        <p>num01 {{num01}}</p>
        <p>num02 {{num02}}</p>
        <set-interval-sub :state="this.taskDetails.state"></set-interval-sub>
    </div>
</template>

<script>
    const taskDetails01 = {
        state:'RUNNING',
        details:[
            {
                "index": 0,
                "stageName": "nameStage01",
                "stageStatus": "SUCCESS",
                "stageDesc": "descStage01"
            },
            {
                "index": 1,
                "stageName": "nameStage02",
                "stageStatus": "PROCESS",
                "stageDesc": "descStage02"
            },
            {
                "index": 2,
                "stageName": "nameStage03",
                "stageStatus": null,
                "stageDesc": "descStage03"
            },
            {
                "index": 3,
                "stageName": "nameStage04",
                "stageStatus": null,
                "stageDesc": "descStage04"
            }
        ]
    };
    const taskDetails02 = {
        state:'STOPPED',
        details:[
        {
            "index": 0,
            "stageName": "nameStage01",
            "stageStatus": "SUCCESS",
            "stageDesc": "descStage01"
        },
        {
            "index": 1,
            "stageName": "nameStage02",
            "stageStatus": "SUCCESS",
            "stageDesc": "descStage02"
        },
        {
            "index": 2,
            "stageName": "nameStage03",
            "stageStatus": "STOPPED",
            "stageDesc": "descStage03"
        },
        {
            "index": 3,
            "stageName": "nameStage04",
            "stageStatus": null,
            "stageDesc": "descStage04"
        }
    ]
    };
    const taskDetails03 = {
        state: 'RUNNING',
        details: [
            {
                "index": 0,
                "stageName": "nameStage01",
                "stageStatus": "SUCCESS",
                "stageDesc": "descStage01"
            },
            {
                "index": 0,
                "stageName": "nameStage02",
                "stageStatus": "SUCCESS",
                "stageDesc": "descStage02"
            },
            {
                "index": 0,
                "stageName": "nameStage03",
                "stageStatus": "SUCCESS",
                "stageDesc": "descStage03"
            },
            {
                "index": 0,
                "stageName": "nameStage04",
                "stageStatus": "FAILED",
                "stageDesc": "descStage04"
            }
        ]
    };
    const taskDetails04 = {
        state:'STOPPED',
        details:[
            {
                "index": 0,
                "stageName": "nameStage01",
                "stageStatus": "SUCCESS",
                "stageDesc": "descStage01"
            },
            {
                "index": 0,
                "stageName": "nameStage02",
                "stageStatus": "SUCCESS",
                "stageDesc": "descStage02"
            },
            {
                "index": 0,
                "stageName": "nameStage03",
                "stageStatus": "SUCCESS",
                "stageDesc": "descStage03"
            },
            {
                "index": 0,
                "stageName": "nameStage04",
                "stageStatus": "SUCCESS",
                "stageDesc": "descStage04"
            }
        ]
    };
    import setIntervalSub from './setIntervalSub'
    import {TaskStageDetail,TaskStageAnalyzer} from '../../js/taskStageDetail'
    export default {
        name: "setInterval",
        components:{setIntervalSub},
        data(){
            return{
                setMonitor01:null,
                setMonitor02:null,
                num01:0,
                num02:0,
                stepItems:["初始化",'准备中','进行中','结束'],
                currentIndex:-1,
                status:"process",
                taskDetails:taskDetails01,
                state:taskDetails01.state
            }
        },
        mounted(){
            this.queryTaskStatus();
        },
        watch:{
            //'taskDetails.state'
            'state':{
                handler(newVal,oldVal){
                    if(newVal === 'RUNNING'){
                        //this.clearMonitor();
                        this.startMonitor();
                    }else{
                        this.clearMonitor();
                        console.log(this.setMonitor01)
                    }
                },
                deep:true,
                immediate: true
            }
        },
        methods:{
            clearMonitor(){
                clearInterval(this.setMonitor01);
                clearInterval(this.setMonitor02);
                this.num01 = 0;
                this.num02 = 0;
            },
            startMonitor(){
                this.setMonitor01 = setInterval(this.query01,1000)
                this.setMonitor02 = setInterval(this.query02,1000)
                console.log(this.setMonitor01) //判断是否是同一个定时器
            },
            query01(){
                this.num01++;
            },
            query02(){
                this.num02++;
            },
            queryTaskStatus(){
                let stages = [];
                let details = this.taskDetails.details;
                this.state = this.taskDetails.state;
                stages = details.map(e => {
                    let stage = new TaskStageDetail();
                    stage.index = e.index;
                    stage.stageName = e.stageName;
                    stage.stageStatus = e.stageStatus;
                    stage.stageDesc = e.stageDesc;
                    return stage
                })
                let result = TaskStageAnalyzer.doAnalysis(stages);
                this.currentIndex = result.currentIndex;
                this.status = result.currentStatus;
                if(this.status === "error"){
                    this.status = "process";
                    this.$nextTick(() => {
                        this.status = "error";
                    })
                }else if(this.status !== "finish"){
                    this.status = "process"
                }
            },
            click1(){
                this.taskDetails = taskDetails01;
                this.queryTaskStatus();
            },
            click2(){
                this.taskDetails = taskDetails02;
                this.queryTaskStatus();
            },
            click3(){
                this.taskDetails = taskDetails03;
                this.queryTaskStatus();
            },
            click4(){
                this.taskDetails = taskDetails04;
                this.queryTaskStatus();
            }
        }
    }
</script>

<style scoped>

</style>