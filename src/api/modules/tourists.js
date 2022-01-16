import request from '@/utils/request'

export default {

/**
 * @description 获取授权登录的路径
 * @param {String} platform 授权类型 wechatweb:微信web
 * @returns 
 */
authorizedUrl: data => {
    return request({
        data,
        url: '/api/tourists/authorized',
        method: 'get',
        mock: false
    })
},


/**
 * @description 授权登录
 * @param {String} platform 授权类型 wechatweb:微信web
 * @param {String} ticket 授权code 
 * @param {String} state 授权state 防止csrf攻击
 * @returns 
 */
 snsLogin: data => {
    return request({
        data,
        url: '/api/tourists/snsLog',
        method: 'post',
        mock: false
    })
},

/***** END *****/
}