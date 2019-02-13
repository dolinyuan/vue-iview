<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button @click="handleStart">Start iView</Button>
                </h2>
            </Col>
        </Row>
        <Row type="flex" justify="left" align="middle">
            <Col span="24">
                <h2>Demo List</h2>
                <ol>
                    <li>
                        <a target="_blank" href="http://localhost:8080/form-item-repeat-name">动态增减表单项</a>
                        <p>补充：重复字段的实时校验</p>
                    </li>
                    <li>
                        <a target="_blank" href="http://localhost:8080/form-item-prop-diy">添加tag标签</a>
                        <p>单个input，阻止回车提交表单：<br/>
                            a.
                        </p>
                    </li>
                    <li>
                        <a target="_blank" href="http://localhost:8080/canvas-svg">canvas-svg</a>
                        <p>canvas-svg：待测试<br/>
                            a.
                        </p>
                    </li>
                    <li>
                        <a target="_blank" href="http://localhost:8080/echarts">echarts</a>
                        <p>echarts：待测试<br/>
                            a.
                        </p>
                    </li>
                    <li>
                        <a target="_blank" href="http://localhost:8080/cascader">cascader</a>
                        <p>cascader：级联<br/
                        </p>
                    </li>
                    <li>
                        <a target="_blank" href="http://localhost:8080/selectlist">selectlist</a>
                        <p>selectlist：下拉框<br/>
                            a.
                        </p>
                    </li>
                    <li>
                        <a target="_blank" href="http://localhost:8080/subject">subject</a>
                        <p>selectlist：下拉框<br/>
                            a.
                        </p>
                    </li>
                    <li>
                        <div>
                            <p>软件下载</p>
                            <p>
                                https://blog.csdn.net/shengshengshiwo/article/details/79599761<br>
                                软件下载<br>
                                https://pan.baidu.com/s/1bpnlLAR#list/path=%2F&parentPath=%2Fsharelink4244700829-484111051750387<br>
                                破解补丁<br>
                                JetbrainsCrack-3.1-release-enc.jar<br>
                                教程<br>
                                http://baijiahao.baidu.com/s?id=1585530607645308087&wfr=spider&for=pc
                            </p>
                        </div>
                    </li>
                </ol>
            </Col>
        </Row>
        <xmp><b></b><input type="text" style="display: none;"></xmp>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    }
</script>
<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 20px;
        bottom: 20px;
        left: 100px;
        text-align: left;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 20px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            //height: 100%;
            a{
                font-weight:bold;
                font-size:14px;
            }
        }

    }
</style>
