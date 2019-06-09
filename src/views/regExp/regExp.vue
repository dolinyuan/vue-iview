<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "regExp",
        data(){
            return{
                str:"sunqiangwei is a foolish",
                keys:["wei","lish"]
            }
        },
        mounted:function () {
            this.highLightKey(this.str, this.keys);
        },
        methods:{
            highLightKey(str,keys){
                let values =JSON.stringify(str).split(" ");
                values = values.map(value => {
                    let item = value;
                    keys.forEach(key => {
                        if(value.indexOf(key) !== -1){
                            item = "<span class='red'>" + value + "<span>"
                        }
                    })
                    return item
                })
                console.log(values);
            }
        }
    }
</script>

<style scoped>

</style>