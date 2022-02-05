<template>
    <div class="login-ways">
        <div class="title">选择登录方式</div>
        <div class="logo" @click="wechatAuthorizePage()">
            <img src="/assets/wechat-logo.jpeg" alt="">
        </div>
        <div class="logo" @click="telephoneLogPage()">
            <img src="/assets/telephone-logo.jpeg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {}
    },
    methods:{
        wechatAuthorizePage(){
            this.$api.authorizedUrl({platform:"wechatweb"}).then(data => {
                window.location.href = data.authorizedUrl
            })
        },
        telephoneLogPage(){
            this.$router.push({path : "/tourists/teleLog"})
        },
    },
    mounted(){
        // this.gameType = this.$route.params.gameType
        
    },
    computed:{}
}
</script>

<style scoped>
.login-ways{
    width: 400px;
    height: 200px;
    margin: 100px auto;
}

.logo{
    width: 198px;
    height: 198px;
    border: 1px solid #DDDDDD;
    border-radius: 1px;
    cursor: pointer;
    float: left;
}
.logo img{
    width: 100%;
}

.title{
    text-align: center;
}
</style>


