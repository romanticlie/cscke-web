import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user: {},
    token: '',
}

const mutations = {
    setUserBase(state,user){
        if(user.strid != undefined){
            state.user['userid'] = user.strid
        }

        if(user.base != undefined){
            state.user['base'] = user.base
        }
    },
    setToken(state,token){
        if(token != ""){
            state.token = token
        }
    }
}

export default new Vuex.Store({
    state,
    mutations
})