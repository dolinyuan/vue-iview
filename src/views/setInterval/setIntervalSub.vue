<template>
    <div>
        setIntervalSub
        <p>state {{state}}</p>
        <p>num03 {{num03}}</p>
        <p>num04 {{num04}}</p>
    </div>
</template>

<script>
    export default {
        name: "setIntervalSub",
        data(){
            return{
                num03:0,
                num04:0,
                setMonitor03:null,
                setMonitor04:null
            }
        },
        props:['state'],
        watch:{
            'state':{
                handler(newVal,oldVal){
                    if(newVal === 'RUNNING'){
                        //this.clearMonitor();
                        this.startMonitor();
                    }else{
                        this.clearMonitor();
                    }
                },
                deep:true,
                immediate: true
            }
        },
        methods:{
            clearMonitor(){
                clearInterval(this.setMonitor03);
                clearInterval(this.setMonitor04);
                this.num03 = 0;
                this.num04 = 0;
            },
            startMonitor(){
                this.setMonitor03 = setInterval(this.query03,1000);
                this.setMonitor04 = setInterval(this.query04,1000);
            },
            query03(){
                this.num03++;
            },
            query04(){
                this.num04++;
            },
        }
    }
</script>

<style scoped>

</style>