<template>
    <div>
        <div style="margin:50px;">
            <Button type="primary" @click="showDialog">View Dialog</Button>
            <!--弹出框-->
            <div v-show="dialogVisibile" @mousedown ="moveHandler($event)" ref="dialog" id="dialog" class="dialog"
                 minheight="320"
                 minwidth="660" ><!--hide-->
                <div id="dlg_top" class="dlg_top">
                    <label class="dlg_title">弹出窗口</label>
                </div>
                <div class="dlg_content">
                    <label style="display:inline-block; margin:10px;line-height:26px;">春暖花开的4月，干燥易上火，早晚还有点凉，早餐要吃点暖胃的，尤其是一碗热乎乎的面条下肚儿，立马暖全身，舒坦！早餐吃得好吃得暖，春季不闹毛病，肠胃不易闹感冒。</label>
                </div>
                <div class="dlg_bottom">
                    <Button type="primary" @click="hideDialog">提交</Button>
                    <Button type="primary" @click="hideDialog">关闭</Button>
                </div>
                <div ref="dlg_right" id="dlg_right" @mousedown="rightMousedown($event)"></div>
                <div ref="dlg_right_bottom" id="dlg_right_bottom" @mousedown="rightBottomMousedown($event)"></div>
                <div ref="dlg_bottom" id="dlg_bottom" @mousedown="bottomMousedown($event)"></div>
            </div>
        </div>
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Modal
                v-model="modal1"
                title="Common Modal dialog box title"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
        <Table border :columns="columns7" :data="data6" :loading="loading"></Table>
    </div>
</template>

<script>
    import ModalDragdrop from '../../js/modalDragdrop'
    export default {
        name: "modal",
        data () {
            return {
                modal1: false,
                loading: false,
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                dialogVisibile:false,
                el_dlg_right_bottom:null,
                el_dialog:null,
                minHeight:null,
                minWidth:null,
                right:null,
                bottom:null,
                mouseStart:{},
                divStart:{},
                rightStart:{},
                bottomStart:{},
            }
        },
        created(){
        },
        mounted(){
            this.$nextTick(function () {
                this.el_dlg_right_bottom = this.$refs.dlg_right_bottom;//document.getElementById("dlg_right_bottom");
                this.el_dialog =  this.$refs.dialog;//document.getElementById("dialog");
                this.minHeight = $("#dialog").attr("minheight");
                this.minWidth = $("#dialog").attr("minwidth");
                this.right = this.$refs.dlg_right;//document.getElementById("dlg_right");
                console.log(this.right);
                this.bottom = document.getElementById("dlg_bottom");
            })
        },
        methods: {
            showDialog(){
                this.dialogVisibile = true;
            },
            hideDialog(){
                this.dialogVisibile = false;
            },
            moveHandler(evt) {
                var $trgt = $(event.target);
                if (!$trgt.hasClass("dlg_top")) return;

                var el = document.getElementById("dialog")
                var oevent = evt || event;
                var distanceX = oevent.clientX - el.offsetLeft;
                var distanceY = oevent.clientY - el.offsetTop;
                $(document).bind("mousemove", function (evt) {
                    var oevent = evt || event;
                    el.style.left = oevent.clientX - distanceX + 'px';
                    el.style.top = oevent.clientY - distanceY + 'px';
                });
                $(document).bind("mouseup", function () {
                    $(document).unbind("mousemove");
                    $(document).unbind("mouseup");
                });
            },
            rightMousedown(ev){
                var oEvent = ev || event;
                this.mouseStart.x = oEvent.clientX;
                this.mouseStart.y = oEvent.clientY;
                this.rightStart.x = this.right.offsetLeft;
                if (this.right.setCapture) {
                    this.right.onmousemove = this.doDragToRightBottomToRight;
                    this.right.onmouseup = this.stopDragToRightBottomToRight;
                    this.right.setCapture();
                }
                else {
                    document.addEventListener("mousemove", this.doDragToRightBottomToRight, true);
                    document.addEventListener("mouseup", this.stopDragToRightBottomToRight, true);
                }
            },
            doDragToRightBottomToRight(ev){
                var oEvent = ev || event;
                var l = oEvent.clientX - this.mouseStart.x + this.rightStart.x;
                var w = l + this.el_dlg_right_bottom.offsetWidth;
                if (w < this.el_dlg_right_bottom.offsetWidth) {
                    w = this.el_dlg_right_bottom.offsetWidth;
                }
                else if (w > document.documentElement.clientWidth - this.el_dialog.offsetLeft) {
                    w = document.documentElement.clientWidth - this.el_dialog.offsetLeft - 2;
                }
                if (w < this.minWidth) return;
                this.el_dialog.style.width = w + "px";
            },
            stopDragToRightBottomToRight(){
                if (this.right.releaseCapture) {
                    this.right.onmousemove = null;
                    this.right.onmouseup = null;
                    this.right.releaseCapture();
                }
                else {
                    document.removeEventListener("mousemove", this.doDragToRightBottomToRight, true);
                    document.removeEventListener("mouseup", this.stopDragToRightBottomToRight, true);
                }
            },
            bottomMousedown(ev){
                var oEvent = ev || event;
                this.mouseStart.x = oEvent.clientX;
                this.mouseStart.y = oEvent.clientY;
                this.bottomStart.y = this.bottom.offsetTop;
                if (this.bottom.setCapture) {
                    this.bottom.onmousemove = this.doDragToRightBottomToBottom;
                    this.bottom.onmouseup = this.stopDragToRightBottomToBottom;
                    this.bottom.setCapture();
                }
                else {
                    document.addEventListener("mousemove", this.doDragToRightBottomToBottom, true);
                    document.addEventListener("mouseup", this.stopDragToRightBottomToBottom, true);
                }
            },
            doDragToRightBottomToBottom(ev) {
                var oEvent = ev || event;
                var t = oEvent.clientY - this.mouseStart.y + this.bottomStart.y;
                var h = t + this.el_dlg_right_bottom.offsetHeight;
                if (h < this.el_dlg_right_bottom.offsetHeight) {
                    h = this.el_dlg_right_bottom.offsetHeight;
                }
                else if (h > document.documentElement.clientHeight - this.el_dialog.offsetTop) {
                    h = document.documentElement.clientHeight - this.el_dialog.offsetTop - 2;
                }
                if (h < this.minHeight) return;
                this.el_dialog.style.height = h + "px";
            },
            stopDragToRightBottomToBottom() {
                if (this.bottom.releaseCapture) {
                    this.bottom.onmousemove = null;
                    this.bottom.onmouseup = null;
                    this.bottom.releaseCapture();
                }
                else {
                    document.removeEventListener("mousemove", this.doDragToRightBottomToBottom, true);
                    document.removeEventListener("mouseup", this.stopDragToRightBottomToBottom, true);
                }
            },
            rightBottomMousedown(ev){
                var oEvent = ev || event;
                this.mouseStart.x = oEvent.clientX;
                this.mouseStart.y = oEvent.clientY;
                this.divStart.x = this.el_dlg_right_bottom.offsetLeft;
                this.divStart.y = this.el_dlg_right_bottom.offsetTop;
                if (this.el_dlg_right_bottom.setCapture) {
                    this.el_dlg_right_bottom.onmousemove = this.doDragToRightBottom;
                    this.el_dlg_right_bottom.onmouseup = this.stopDragToRightBottom;
                    this.el_dlg_right_bottom.setCapture();
                }
                else {
                    document.addEventListener("mousemove", this.doDragToRightBottom, true);
                    document.addEventListener("mouseup", this.stopDragToRightBottom, true);
                }
            },
            doDragToRightBottom(ev) {
                var oEvent = ev || event;
                var l = oEvent.clientX - this.mouseStart.x + this.divStart.x;
                var t = oEvent.clientY - this.mouseStart.y + this.divStart.y;
                var w = l + this.el_dlg_right_bottom.offsetWidth;
                var h = t + this.el_dlg_right_bottom.offsetHeight;
                if (w < this.el_dlg_right_bottom.offsetWidth) {
                    w = this.el_dlg_right_bottom.offsetWidth;
                }
                else if (w > document.documentElement.clientWidth - this.el_dialog.offsetLeft) {
                    w = document.documentElement.clientWidth - this.el_dialog.offsetLeft - 2;
                }
                if (h < this.el_dlg_right_bottom.offsetHeight) {
                    h = this.el_dlg_right_bottom.offsetHeight;
                }
                else if (h > document.documentElement.clientHeight - this.el_dialog.offsetTop) {
                    h = document.documentElement.clientHeight - this.el_dialog.offsetTop - 2;
                }
                if (w < this.minWidth) return;
                this.el_dialog.style.width = w + "px";
                if (h < this.minHeight) return;
                this.el_dialog.style.height = h + "px";
            },
            stopDragToRightBottom() {
                if (this.el_dlg_right_bottom.releaseCapture) {
                    this.el_dlg_right_bottom.onmousemove = null;
                    this.el_dlg_right_bottom.onmouseup = null;
                    this.el_dlg_right_bottom.releaseCapture();
                }
                else {
                    document.removeEventListener("mousemove", this.doDragToRightBottom, true);
                    document.removeEventListener("mouseup", this.stopDragToRightBottom, true);
                }
            },
        ok () {
                this.$Message.info('Clicked ok');
                this.loading = true;
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .hide {
        display: none;
    }
    .left {
        float: left;
    }
    /* 一般按钮 */
    .btn {
        cursor: pointer;
        color: #fff;
        border-color: #417FC8;
        background: -moz-linear-gradient(top,#4a90e2 0,#4a90e2 100%);
        background: -webkit-linear-gradient(top,#4a90e2 0,#4a90e2 100%);
        background: -o-linear-gradient(top,#4a90e2 0,#4a90e2 100%);
        background: -ms-linear-gradient(top,#4a90e2 0,#4a90e2 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4A90E2', endColorstr='#4A90E2', GradientType=0);
        background: linear-gradient(top,#4a90e2 0,#4a90e2 100%);
        border-radius: 3px;
        height: 28px;
        line-height: 28px;
        padding: 0px 10px;
    }
    /* 弹窗 */
    .dialog {
        width: 50%;
        position: absolute;
        top: 10%;
        left: 20%;
        z-index: 2;
        background: white;
        border-radius: 3px;
        border: 1px solid #eec;
    }
    /* 弹窗上部 */
    .dlg_top {
        position: relative;
        height: 28px;
        z-index: 3;
        background: #f3f3f3;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom: 1px solid #eec;
        cursor: move;
    }
    /* 弹窗右上角 ico */
    .dlg_btn_ico {
        float: right;
        background: transparent;
        background-size: cover;
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-right: 15px;
        margin-top: 5px;
        background-repeat: no-repeat;
    }
    /* 弹窗右上角 ico 鼠标浮上去的样式 */
    .dlg_btn_ico:hover {
        background-color: #eee;
    }
    /* 最小化 */
    /* .dlg_btn_min_top {
        background-image: url(../images/ico_min.png);
    } */
/*    !* 最大化 *!
    .dlg_btn_max_top {
        background-image: url(../images/ico_max.png);
    }
    !* 还原 *!
    .dlg_btn_reback_top {
        background-image: url(../images/ico_reback.png);
    }
    !* 关闭 *!
    .dlg_btn_close_top {
        background-image: url(../images/ico_close.png);
    }*/
    /* 左上角logo */
    .dlg_logo {
        margin-left: 5px;
        margin-top: -3px;
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
    }
    /* 弹窗标题 */
    .dlg_title {
        line-height: 28px;
        margin-left: 5px;
    }
    /* 弹窗内容 */
    .dlg_content {
        position: relative;
        min-height: 300px;
        overflow-y: auto;
        margin-right: 4px;
    }
    /* 弹窗底部 */
    .dlg_bottom {
        position: absolute;
        height: 45px;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 3;
        padding-top: 5px;
        background: #f3f3f3;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top: 1px solid #eec;
        text-align: center;
    }
    /* 缩放时右拉块 */
    #dlg_right {
        width: 15px;
        height: 100%;
        float: right;
        position: absolute;
        right: 0;
        top: 0;
        cursor: e-resize;
        overflow: hidden;
        opacity: 0;
        z-index: 3;
    }
    /* 缩放时下拉块 */
    #dlg_bottom {
        width:100%;
        height:15px;
        position:absolute;
        left:0;
        bottom:0;
        cursor:n-resize;
        overflow:hidden;
        opacity:0;
        z-index:3;
    }
    /* 缩放时右下拉块 */
    #dlg_right_bottom{
        width:15px;
        height:15px;
        position:absolute;
        right:0;
        bottom:0;
        cursor:nw-resize;
        overflow:hidden;
        font-size:12px;
        text-align:center;
        line-height:15px;
        float:right;
        z-index:4;
    }
</style>