import {request} from "@/utils/request";

/**
 *
 * @author yang
 * @desc emergencyPage点击下拉框，提交表单请求file_level和file_type查询档案等级和类别表
 */
export function get_file_level(){
    return request({
        url: '/prison/filelevel/list',
        method: 'get',
    })
}

export function get_file_type(){
    return request({
        url: '/prison/filetype/list',
        method: 'get',
    })
}