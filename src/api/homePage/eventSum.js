import {request} from "@/utils/request";

/**
 *
 * @author yang
 * @desc homePage主页请求sum数据
 */
//发送get请求主页sum组件后端数据
export function get_sum_data(){
    return request({
        url: '/prison/eventsum/list',
        method: 'get',
    })
}