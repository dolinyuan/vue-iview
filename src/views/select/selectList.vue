<template>
    <div>
        <div class="Info">
            <p>{{resType}}</p>
            <p>{{grading}}</p>
        </div>
        <div class="time-grad-box">
            <span @click="chooseGrad('grad_24hour')">近24小时</span>
            <span @click="chooseGrad('grad_7days')">近7天</span>
            <span @click="chooseGrad('grad_1month')">近1个月</span>
            <span @click="chooseGrad('grad_1year')">近1年</span>
        </div>
        <div class="res-type-box">
            <Select v-model="resType" style="width:200px">
                <Option v-for="item in resTypeData" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
        <div class="grading-box">
            粒度：
            <Select v-model="grading" style="width:200px">
                <Option v-for="item in gradingData" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
    </div>
</template>

<script>

    var resTypeList = [
        {
            value:'CPU',
            label:'CPU'
        },
        {
            value:'GPU',
            label:'GPU'
        },
        {
            value:'MEM',
            label:'MEM'
        }
    ]
    var gradingList1 = [
        {
            value:'0',
            label:'5min'
        },
        {
            value:'1',
            label:'1hour'
        }
    ]
    var gradingList2 = [
        {
            value:'1',
            label:'1hour'
        },
        {
            value:'2',
            label:'1day'
        }
    ]
    var gradingList3 = [
        {
            value:'2',
            label:'1day'
        }
    ]
    export default {
        name: "selectList",
        data(){
            return{
                resType:'CPU',
                resTypeData:resTypeList,
                grading:'0',
                gradingData:gradingList1,
            }
        },
        methods:{
            chooseGrad(value){
                this.renderGrad(value);
            },
            renderGrad(value){
              switch (value) {
                  case 'grad_24hour':
                      this.gradingData = gradingList1;
                      this.grading = this.gradingData[0].value
                      break;
                  case 'grad_7days':
                      this.gradingData = gradingList2;
                      this.grading = this.gradingData[0].value
                      break;
                  case 'grad_1month':
                      this.gradingData = gradingList2;
                      this.grading = this.gradingData[0].value
                      break;
                  case 'grad_1year':
                      this.gradingData = gradingList3;
                      this.grading = this.gradingData[0].value
                      break;
              }
            }
        }
    }
</script>

<style scoped>
    .Info{
        margin:20px;
        width:100%;
    }
    .time-grad-box{
        float: left;
        margin:10px 20px;
    }
    .time-grad-box span{
        display:inline-block;
        padding:5px 8px;
        border:1px solid #eee;
        cursor:pointer;
    }
    .res-type-box{
        float:left;margin:10px 20px;
    }
    .grading-box{
        float:left;margin:10px 20px;
    }
</style>
