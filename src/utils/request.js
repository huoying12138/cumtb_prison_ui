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

//异常处理程序
const validateStatus = function (status) {
    if (status >= 200 && status < 300) {
        return true;
    } else {
        Notification.error({title: status, message: codeMessage[status]});
        return false;
    }
}

axios.create({validateStatus});

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "axios"
 * @return {object}           An object containing either "data" or "err"
 */

export async function request(url, options) {
    const res = await axios.request({url, ...options});
    if (res.data.code === 200) {
        return res.data;
    }
    Notification.error({title: "", message: res.data.message});
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
    return await request(url, {method: "GET", ...options});
}

export async function post(url,options){
    options.headers={'Content-Type':'application/json;charset=utf-8'};
    return await request(url,{methods:"POST",...options});
}

export async function postForm(url,options){
    return await request(url,{methods:"POST",...options});
}