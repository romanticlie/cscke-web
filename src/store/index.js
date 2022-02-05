import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user: {},
    token: '',
}



const mutations = {
    setUserBase(state,user){

        if(!user || user == undefined || user.base == undefined){
            return
        }
        state.user = user
        sessionStorage.setItem('user',JSON.stringify(user))
    },
    
    setToken(state,token){
        if(token != ""){
            state.token = token
            sessionStorage.setItem('token',token)
        }
    },
    
}

const getters = {
    getUserBase(state){
        if(state.user && state.user != undefined && state.user.base != undefined){
            return state.user
        }

        let jsonUser = sessionStorage.getItem('user')
        if(jsonUser && jsonUser != undefined && jsonUser != ''){
            let user = JSON.parse(jsonUser)

            if(!user){
                return null
            }

            //将用户基础信息保存到state中
            // state.commit('setUserBase',user)
            return user
        }
        return null
    },
    getToken(state){
        if(state.token != undefined || state.token != ''){
            return state.token
        }

        let token = sessionStorage.getItem('token')

        if(!token || token == ''){
            return ''
        }
        //保存token到store
        //state.commit('setToken',token)

        return token
    },
}



export default new Vuex.Store({
    state,
    mutations,
    getters,
})