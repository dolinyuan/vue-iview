<template>
    <div>
        <button @click="beLarge">Large</button>
        <button @click="beSmall">Small</button>
        <p>Canvas</p>
        <canvas id="bargraphCanvas" width="1000" height="600"></canvas>
    </div>
</template>

<script>
    import PanelDraw from "../../plugin/label2.js"
    import {imgLarge,imgSmall} from "../../plugin/label2.js"
    export default {
        name: "CanvasComp",
        data(){
            return{
                imgSrc:"/static/images/test-img.jpg"
            }
        },
        mounted:function(){
            this.drawCanvas()
        },
        methods:{
            beLarge(){
                imgLarge()
            },
            beSmall(){
                imgSmall()
            },
            drawCanvas(){
                var imgSrc = "/static/images/test-img.jpg"
                var canvas = document.getElementById('bargraphCanvas');
                PanelDraw(imgSrc,canvas)
            }
        }
    }
</script>

<style scoped>

</style>
