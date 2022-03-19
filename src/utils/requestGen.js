import axios from "axios";
import qs from 'qs'
import merge from 'lodash/merge'
import { Message } from 'element-ui';//第二种请求后台数据方式，使用模板vue生成工具
const baseURL = process.env.VUE_APP_BASE_API

//后台url修订请求
const reviseURL = '/ware'

// 创建请求体

const http = axios.create({
    timeout: 2000 * 300,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }

});


/**
 * 请求拦截
 */
http.interceptors.request.use(
    config => {
        config.headers.sn = "123456";
        return config;
    },
    error => {
        return Promise.reject(error);

    }

);

/**
 * 响应拦截
 */
http.interceptors.response.use(
    response => {
        if (response.data && response.data.code === 403) {
            // 401, 没有权限
        } else if (response.data.code && response.data.code !== 200) {
            let msg = response.data.msg;
            Message.error(msg);
        }

        return response;

    },

    error => {

        return Promise.reject(error);

    }

);

/**

 * 请求地址处理

 */

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = false) => {
    // var defaults = {
    //     't': new Date().getTime()
    // }
    return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
    var defaults = {
        't': new Date().getTime()
    }
    data = openDefultdata ? merge(defaults, data) : data
    return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}


http.adornUrl = actionName => {
    return baseURL + reviseURL + actionName;

}
export default http
