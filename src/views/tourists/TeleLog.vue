<template>
    <div class="form">
        <div class="form-item">
            <label for="telephone">手机号：</label>
            <input id="telephone" type="text" v-model="form.tel" placeholder="请输入手机号">
        </div>
        <div class="form-item">
            <label for="random">验证码：</label>
            <input id="random" type="text" v-model="form.random" placeholder="请输入验证码">
            <button class="code-button">获取验证码</button>
        </div>
        <div class="form-item">
            <button class="log-button" @click="login()">登录</button>
        </div>

        <div class="other-log" @click="otherLog()">其他登录方式</div>
    </div>
</template>

<script>
export default {
    name: 'TeleLog',
    data(){
        return {
            form: {
                tel: '',
                random: '',
            },
        }
    },
    methods:{
        login(){
            //验证字段是否为空

            this.$api.telephoneLog(this.form).then(data => {
                this.$store.commit('setUserBase',data.user)
                this.$store.commit('setToken',data.token)

                //跳转到用户中心页面
                this.$router.push({path : "/user/center"})
            })
        },
        otherLog(){
            this.$router.push({path : "/tourists/login"})
        },
    },
    mounted(){
        
    },
    computed:{}
}
</script>

<style scoped>
.form{
    width: 300px;
    height: 100px;
    margin: auto;
    font-size: 16px;
    font-weight: bold;
}
.form-item{
    width: 300px;
    height: 35px;
    margin-bottom: 10px;
}
.form-item input{
    width: 200px;
    height: 25px;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
}
#random{
    width: 100px;
}

.code-button{
    margin-left: 5px;
    width: 95px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #409EFF;
    font-size: 14px;
    color: #FFFFFF;
    background-color: #409EFF;
    outline: none;
}

.log-button{
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #67C23A;
    font-size: 16px;
    font-weight: bold;
    background-color: #67C23A;
    color: #FFFFFF;
    outline: none;
}
.other-log{
    margin-top: 50px;
    text-align: center;
}
</style>


