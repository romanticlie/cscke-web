<template>
    <div class="userinfo">
        <div class="userid">{{user.userid}}</div>
        <div class="nickname">{{user.base.nickname}}</div>
        <div class="avatar">
            <img :src="user.base.avatar" alt="">
        </div>
        <div class="gender">{{user.base.gender}}</div>
    </div>
</template>

<script>
export default {
    name: 'Center',
    data(){
        return {
            user: {
                userid: 0,
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
        if(this.$store.state.user != undefined || this.$store.state.user.base){
            this.user.base = this.$store.state.user.base
            this.user.userid = this.$store.state.user.userid
        }
    }
}
</script>

<style scoped>
.userinfo{
    width: 200px;
    margin: 100px auto;
}
.avatar{
    width: 100px;
    height: 100px;
    border-radius: 10px;
}
.avatar img {
    width: 100%;
}
</style>


