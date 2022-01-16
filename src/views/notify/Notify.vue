<template>
    <div>
        授权回调页面
    </div>
</template>

<script>
export default {
    name: 'Notify',
    data(){
        return {}
    },
    methods: {

    },
    mounted(){
        if(this.$route.query.code != "" || this.$route.query.code != undefined){
            let params = {
                platform: "wechatweb",
                ticket: this.$route.query.code,
                state: this.$route.query.state
            }
            this.$api.snsLogin(params).then(data => {
                this.$store.commit('setUserBase',data.user)
                this.$store.commit('setToken',data.token)

                //跳转到用户中心页面
                this.$router.push({path : "/user/center"})
            })
        }
    },
}
</script>

<style scoped>

</style>


