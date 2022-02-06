<template>
    <div class="userinfo">
        <div class="user-item">
            <label >用户id：</label>
            <span >{{ user.strid }}</span>
        </div>
        <div class="user-item">
            <label >昵称：</label>
            <span >{{ user.base.nickname }}</span>
        </div>
        <div class="user-item">
            <label >性别：</label>
            <span >{{ genderMap[user.base.gender] }}</span>
        </div>
        <div class="user-item">
            <label >头像</label>
            <div class="logo">
                <img :src="user.base.avatar == '' ? '/assets/default-avatar.jpeg' : user.base.avatar" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'  

export default {
    name: 'Center',
    data(){
        let [genderNone,genderMale,genderFemale] = [0,1,2]
        return {
            genderMap:{
                [genderNone]: '暂无',
                [genderMale]: '男',
                [genderFemale]: '女',
            },
        }
    },
    computed: {
        ...mapState([
            'user',
            'token',
        ]),
        ...mapGetters([
            'isUserInit'
        ])
    },
    methods:{
        ...mapMutations([
            'flushUserBase',
            'flushToken',
        ])
    },
    mounted(){
        
        //刷新用户信息和token
        this.flushUserBase()
        this.flushToken()

        //判断用户信息
        if(!this.isUserInit){
             //跳转到登录页面
            this.$router.push({path : "/tourists/login"})
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


