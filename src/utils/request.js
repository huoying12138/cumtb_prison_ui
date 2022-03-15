import axios from "axios";
import {Notification} from "element-ui";

const codeMessage = {
    200: '服务器成功给返回请求数据',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
}

// 异常处理程序
const validateStatus1 = function (status) {
    if (status >= 200 && status < 300) {
        return true;
    } else {
        Notification.error({title: status, message: codeMessage[status]});
        return false;
    }
}
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 10000,
    validateStatus: validateStatus1
})


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "axios"
 * @return {object}           An object containing either "data" or "err"
 */

export async function request(config) {

    const res = await service.request(config);
    //拿到json格式的data数据
    if (res.status === 200) {
        return res;
    }
    Notification.error({title: "", message: res.data.msg});
}

export function queryString(params) {
    let strParam = '';
    let paramArray = [];
    if (params) {
        Object.keys(params).forEach((key) => {
            if (params[key] || params[key] === 0) {
                paramArray.push(key + '=' + params[key]);
            }
        });
        if (strParam.search(/\?/) === -1) {
            strParam += '?' + paramArray.join('&')
        } else {
            strParam += '&' + paramArray.join('&')
        }
    }
    return strParam

}

export async function get(url, options) {
    return await request({
        url: url,
        method: 'get',
        ...options
    });
}

export async function post(url,options){
    options.headers={'Content-Type':'application/json;charset=utf-8'};
    return await request({
        url: url,
        method: 'post',
        ...options
    });
}

export async function postForm(url,options){
    return await request({
        url: url,
        method: 'post',
        ...options
    });
}
// 添加请求拦截器
service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error)
})

export default service