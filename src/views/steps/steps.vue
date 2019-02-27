<template>
    <div style="margin-top:20px;">
        <button @click="click1">按钮1</button>
        <button @click="click2">按钮2</button>
        <button @click="click3">按钮3</button>
        <p>currentIndex {{currentIndex}}</p>
        <p>status {{status}}</p>
        <Steps :current="currentIndex" :status="status">
            <Step v-for="item in stepItems" title="已完成" content="">{{item}}</Step>
        </Steps>
        <p v-for="item in taskDetails">{{item}}</p>
    </div>

</template>
<script>
    const taskDetails01 = [
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
    ];
    const taskDetails02 = [
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
    ];
    const taskDetails03 = [
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
    ];
    const taskDetails04 = [
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
    ];
    import {TaskStageDetail,TaskStageAnalyzer} from '../../js/taskStageDetail'
    export default {
        name: "steps",
        data(){
            return{
                stepItems:["初始化",'准备中','进行中','结束'],
                currentIndex:-1,
                status:"process",
                taskDetails:taskDetails02
            }
        },
        mounted(){
          this.queryTaskStatus();
        },
        methods:{
            queryTaskStatus(){
                let stages = [];
                stages = this.taskDetails.map(e => {
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
                }
                console.log(result);
            },
            click1(){
                this.taskDetails = taskDetails02;
                this.queryTaskStatus();
            },
            click2(){
                this.taskDetails = taskDetails03;
                this.queryTaskStatus();
            },
            click3(){
                this.taskDetails = taskDetails04;
                this.queryTaskStatus();
            }
        }
    }
</script>

<style scoped>

</style>