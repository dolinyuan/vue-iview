<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted () {
            this.test()
        },
        beforeDestroy () {

        },
        methods: {
            test(){
                for (var i=1;i<=3;i++) {
                    setTimeout(function(){console.log(i);},1000)
                    /*(function(j){
                        setTimeout( function timer(){
                            console.log( j );
                            }, 1000 );
                        })( i );*/
                    }
            }
        }
    }
</script>
