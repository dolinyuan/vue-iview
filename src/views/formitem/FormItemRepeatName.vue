<template>
    <div>
    <p>https://www.cnblogs.com/lvdabao/p/es6-promise-1.html</p>
    <p>https://segmentfault.com/a/1190000010345031</p>
    <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">
        <ul v-if="formDynamic.items">
            <li v-for="item in formDynamic.items">
                {{item}}
            </li>
        </ul>
        <div @click="switchClick">Switch</div>
        <div v-if="!isShow">
        <FormItem
                v-for="(item, index) in formDynamic.items"
                v-if="item.status"
                :key="index"
                :label="'Item ' + item.index"
                :prop="'items.' + index + '.value'"
                :rules="funRules">
            <Row>
                <Col span="18">
                    <Input  type="text" v-model="item.value" placeholder="Enter something..."></Input>
                    <!-- @on-blur="check(item,index)" -->
                </Col>
                <Col span="4" offset="1">
                    <Button @click="handleRemove(index)">Delete</Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Row>
                <Col span="12">
                    <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>
                </Col>
            </Row>
        </FormItem>
        </div>
        <input v-if="isShow" type="textarea" v-model="formDynamic.blukValues"></input>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
            <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
export default {
        data () {
            const appearCount = (array,value)=>array.reduce((a,v)=>v===value?a+1:a+0,0)
            const validateCheckRepeat = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('value can not be empty'));
                } else {
                    var itemValueArray = [];
                    this.formDynamic.items.forEach(function(item){
                        itemValueArray.push(item.value)
                    })
                    var count = appearCount(itemValueArray,value)
                    if(count > 1){
                        callback(new Error('value has exsisted'));
                    }
                    callback([])
                }
            }

            return {
                index: 1,
                isShow:false,
                formDynamic: {
                    blukValues:"",
                    items: [
                        {
                            value: '',
                            index: 1,
                            status: 1
                        }
                    ]
                },
                funRules:{validator:validateCheckRepeat, trigger: 'change'},
                /*funRules:{required: true, message: '变量不能为空', trigger: 'blur'}*/
            }
        },
        watch:{
            formDynamic:{
                handler(val){
                    this.$refs['formDynamic'].validate()
                },
                deep:true
            },
            'formDynamic.items':{
                handler(val){
                },
                deep:true
            }
        },
        methods: {
            switchClick(){
                /*this.isShow = !this.isShow;
                this.$refs['formDynamic'].validate().then((result)=>{
                    if(this.isShow){
                        console.log(this.isShow)
                        this._renderBlukValues(this.formDynamic.items)
                    }
                })*/

            },
            _renderBlukValues(values){
                this.formDynamic.blukValues = ""
                values.forEach((item,index)=>{
                    this.formDynamic.blukValues += item.value;
                })
            },
            check(data,index){
                var currentValue = data.value
                var itemValueArray = [];
                this.formDynamic.items.forEach(function(item){
                    itemValueArray.push(item.value)
                })
                const appearCount = (array,value)=>array.reduce((a,v)=>v===value?a+1:a+0,0)
                var count = appearCount(itemValueArray,data.value)
                if(count > 1){
                    this.formDynamic.items[index].value=""
                    console.log(currentValue)
                    this.funRules.message = "变量 " + currentValue + " 已存在，请重新输入"
                }
                else{
                    this.funRules.message = "变量不能为空"
                }
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove (index) {
                this.formDynamic.items[index].status = 0;
            }
        }
    }
</script>
<style scoped lang="less">

</style>
