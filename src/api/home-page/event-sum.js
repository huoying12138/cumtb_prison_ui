import {request} from "@/utils/request";

export function request_sum_data(){
    return request({
        url: '/prison/eventsum/list',
        method: 'get',
    })
}