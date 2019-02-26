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
    </div>

</template>
<script>
    export default {
        name: "steps",
        data(){
            return{
                stepItems:["初始化",'准备中','进行中','结束'],
                currentIndex:0,
                status:"process"
            }
        },
        methods:{
            click1(){
                if(this.status === "error"){
                    this.status = "process"
                    alert(this.status)
                }
                this.currentIndex = 1
                this.status = "error"
            },
            click2(){
                this.currentIndex = 2
                this.status = "process"
            },
            click3(){
                if(this.status === "error"){
                    this.status = "process"
                    alert(this.status)
                }
                this.currentIndex = 3
                this.status = "error"
            }
        }
    }
</script>

<style scoped>

</style>