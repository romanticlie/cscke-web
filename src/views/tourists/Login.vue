<template>
    <div class="login-ways">
        <div class="title">选择登录方式</div>
        <div class="logo" @click="intoAuthorizePage()">
            <img src="http://cscke.ginguess.com/assets/wechat-logo.jpeg" alt="">
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
        intoAuthorizePage(){
            this.$api.authorizedUrl({platform:"wechatweb"}).then(data => {
                window.location.href = data.authorizedUrl
            })
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
    width: 200px;
    height: 185px;
    margin: 100px auto;
    cursor: pointer;
}


.logo img{
    border-radius: 10px;
    width: 100%;
}

.title{
    text-align: center;
}
</style>


