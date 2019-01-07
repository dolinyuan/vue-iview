<template>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="Password" prop="passwd">
            <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem label="Age" prop="age">
            <Input type="text" v-model="formCustom.age" number></Input>
        </FormItem>
        <p>tag{{formCustom.tags}}</p>
        <FormItem label="tag" prop="tag">
            <Input type="text" v-model="formCustom.tag" @keyup.enter.native="addTag(formCustom.tag)"></Input>
        </FormItem>
        <Tag v-for="item in formCustom.tags" :key="item" :name="item" closable @on-close="deleteTag">{{item}}</Tag>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Age cannot be empty'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please enter a numeric value'));
                    } else {
                        if (value < 18) {
                            callback(new Error('Must be over 18 years of age'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            const validateTag = (rule,value,callback) => {
                if (!value) {
                    return callback(new Error('tag cannot be empty'));
                }
                else{
                    callback(new Error("1111"));
                }
            };
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: '',
                    tag:'',
                    tags:['a','b']
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ],
                    tag:[
                        { required: true, message: 'tag can not be empty', trigger: 'blur' },
                        { type: 'string', max: 10, message: 'less than 10 words', trigger: 'blur' }
                        //{ validator: validateTag, trigger: 'change' }
                    ]
                },
                /*tagCheck:[
                    { required: true, message: 'Please fill in the user name', trigger: 'blur' },
                    { type: 'string', max: 10, message: 'less than 10 words', trigger: 'change' }
                ]*/
                /*{
                    tag:[
                        { validator: validateTag, trigger: 'change' }
                    ]
                }*/
                
            }
        },
        methods: {
            addTag(name){
                if(name.length > 19){
                    this.$Message.error("Fail")
                    return
                }
                this.formCustom.tags.push(name)
            },
            deleteTag(event,name){
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
