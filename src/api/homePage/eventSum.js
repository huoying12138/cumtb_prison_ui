import {request} from "@/utils/request";

//发送get请求主页sum组件后端数据
export function get_sum_data(){
    return request({
        url: '/prison/eventsum/list',
        method: 'get',
    })
}