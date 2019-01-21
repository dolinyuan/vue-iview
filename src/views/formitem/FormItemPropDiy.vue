<template>
    <div class="template">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
            <FormItem label="tag" prop="tag">
                <Input type="text" v-model="formCustom.tag" @keyup.13.native.prevent="addTag(formCustom.tag)" onkeydown="if(event.keyCode==13)return false;"></Input>
            </FormItem>
            <Tag v-for="item in formCustom.tags" :key="item" :name="item" closable @on-close="handleClose">{{item}}</Tag>
            <!--<input type="text" style="display: none;">-->
            <FormItem>
                <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
                <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
        data () {
            const validateTag = (rule,value,callback) => {
                value = value.trim();
                this.formCustom.tag = value;
                if(!value){
                    return;
                }
                var hasExisted = false;
                this.formCustom.tags.forEach(item => {
                    if (item === value) {
                        hasExisted = true;
                    }
                });
                if(hasExisted){
                    callback(new Error('value has exsisted'));
                }else{
                    this.formCustom.tags.push(value);
                    this.formCustom.tag = '';
                }
            }
            return {
                formCustom: {
                    tag:'',
                    tags:[]
                },
                ruleCustom: {
                    tag:[
                        { type: 'string', max: 10, message: 'less than 10 words', trigger: 'change' },
                        { validator: validateTag, trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            addTag(value){
                this.$refs['formCustom'].validateField('tag')
            },
            handleClose(event,name){
                console.log(name)
                const index = this.formCustom.tags.indexOf(name);
                this.formCustom.tags.splice(index, 1);
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
            }
        }
    }
</script>
<style scoped lang="less">

</style>
