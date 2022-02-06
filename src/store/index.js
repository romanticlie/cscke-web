import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userInit = 0
const userAssigned = 1

const state = {
    userInit: userInit,
    user: {
        userid: 0,
        strid: '',
        base: {
            avatar: '',
            gender: 0,
            nickname: '',
        },
    },
    token: '',
}



const mutations = {
    setUserBase(state,user){

        if(!user || typeof(user) != 'object' || user.base == undefined){
            return
        }
        //保存到state中
        state.user = user
        state.userInit = userAssigned
        //保存到sessionStorage中，刷新后使用
        sessionStorage.setItem('user',JSON.stringify(user))
    },
    flushUserBase(state){
        if(state.userInit == userInit){
            //获取sessionStorage中的user信息
            let jsonUser = sessionStorage.getItem('user')
            if(jsonUser && jsonUser != ''){
                let user = JSON.parse(jsonUser)
                //判断用户信息是否正确
                if(user && user.base != undefined){
                    state.user = user
                    state.userInit = userAssigned
                }
            }
        }
    },
    setToken(state,token){
        if(!token || typeof(token) != 'string' || token != ""){
            //保存到state中
            state.token = token
            //保存到sessionStorage中，刷新后使用
            sessionStorage.setItem('token',token)
        }
    },
    flushToken(state){
        if(state.token == ''){ 
            //获取sessionStorage中的token信息
            let token = sessionStorage.getItem('token')
            if(token && token != ''){
                state.token = token
            }
        }
    }
}

const getters = {
    isUserInit(state){
        return state.userInit == userAssigned
    },
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
})