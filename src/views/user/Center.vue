<template>
    <div class="userinfo">
        <div class="user-item">
            <label for="userid">用户id：</label>
            <span id="userid">{{ user.strid }}</span>
        </div>
        <div class="user-item">
            <label for="nickname">昵称：</label>
            <span id="nickname">{{ user.base.nickname }}</span>
        </div>
        <div class="user-item">
            <label for="gender">性别：</label>
            <span id="gender">{{ user.base.gender }}</span>
        </div>
        <div class="user-item">
            <label for="avatar">头像</label>
            <div id="avatar" class="logo">
                <img :src="user.base.avatar == '' ? '/assets/default-avatar.jpeg' : user.base.avatar" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Center',
    data(){
        return {
            user: {
                userid: "",
                base:{
                    nickname: "",
                    avatar: "",
                    gender: 0,
                }
            }
        }
    },
    methods:{

    },
    mounted(){
        let user = this.$store.getters.getUserBase
        if(user && user != undefined && user.base != undefined){
            this.user = user
        }
    }
}
</script>

<style scoped>
.userinfo{
    width: 350px;
    margin: 100px auto;
}
.user-item{
    width: 350px;
    height: 50px;
    margin-bottom: 10px;
}
.logo{
    display: inline-block;
    width: 50px;
    height: 50px;
}

.logo img {
    width: 100%;
}

</style>


