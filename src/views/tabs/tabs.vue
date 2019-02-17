<template>
    <div>
        currentTab: {{currentTab}}<br>
        lastIndex: {{lastIndex}} <br>
        temp: {{temp}} <br>
        arr{{arr}}<br>
        arr1{{arr1}}<br>
        tabs{{tabs}}
        <Tabs ref="tabsRef" type="card" v-model="currentTab">
            <!--<TabPane v-for="tab in tabs" :name="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>-->
            <TabPane v-for="tab in tabs" :key="index" :label="'标签' + tab">标签{{ tab }}</TabPane>
            <Button @click="handleStart" size="small" slot="extra">增加</Button>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: "tabs",
        data () {
            return {
                tabs: [1,2,3],
                currentTab:1,
                max:4,
                arr1:[
                    {id:1,status:'PEDING',value:'value1'},
                    {id:2,status:'PEDING',value:'value2'}
                ],
                arr:[],
                timer:null,
                timer2:null,
                lastIndex:null,
                temp:null
            }
        },
        computed:{
            /*currentTab(){
                return this.tabs[0]
            }*/
        },
        mounted(){

        },
        methods: {
            initArr(){
                let test_data = {id:3,status:'PEDING',value:'value3'};
                this.arr1.unshift(test_data);
            },
            startTimer(){
                this.temp = this.tabs[this.currentTab];
              this.timer = setInterval(this.handleTabsAdd,1000);
              this.timer2 = setInterval(this.initArr,5000);
              setTimeout(this.clear,10000)
            },
            clear(){
                clearInterval(this.timer2)
            },
            clearTimer(){
                clearInterval(this.timer)
            },
            handleStart(){
                this.startTimer()
            },
            equalValue(a,b){
                if(!b.length){
                    b = a
                }
                /*if(!this.arr.length){
                    this.arr = this.arr1
                }*/
                /*if(!b.length){
                    b = a;
                    console.log(b.length)
                }/*else{
                    a.forEach(item => {
                        //alert("11")
                        b.forEach(node => {
                            if(node.id === item.id && node.status !== item.status){
                                return item;
                            }
                        })
                        b.push(item)
                        /!*if(!b.indexOf(item)){
                            b.push(item)
                        }*!/
                        console.log(item)
                    })
                }*/
            },
            handleTabsAdd () {
                this.tabs.unshift(this.max)
                this.max++;
                if(this.max>10){
                    this.clearTimer()
                }
                this.lastIndex = this.tabs.indexOf(this.temp);
                this.currentTab = this.lastIndex;

                /*this.$nextTick(function () {
                    this.updateNav();
                });*/
                this.arr1.map(item => {
                    item.status = (item.status==='RUNNING')?'PEDING':'RUNNING';
                    return item
                });
                this.equalValue(this.arr1,this.arr)
                if(!this.arr.length){
                    this.arr1.forEach(item => {
                        this.arr.push(item)
                    })
                }
                else{
                    let other = null;
                    other = this.arr1.filter(item => {
                        let data = this.arr.map(node => {
                            return node.id
                        })
                        return !data.includes(item.id)
                    })
                    console.log(other)
                    other.forEach(node => {
                        this.arr.push(node)
                    })
                    //this.arr.push(other)
                }

                //console.log(this.arr)
            },
        }
    }
</script>

<style scoped>

</style>