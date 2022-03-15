import {request} from "@/utils/request";

//获取文件档案
export function get_file_list(){
    return request({
        url: '/prison/filelist/list',
        method: 'get',
    })
}
//删除单个文件档案
export function delete_file_list(ids){
    return request({
        url: '/prison/filelist/delete',
        method: 'delete',
        data: [ids,],
    })
}
//新建档案
export function save_file_list(fileList){
    return request({
        url: '/prison/filelist/save',
        method: 'post',
        data: fileList
    })
}
//获取指定id档案
export function get_file_list_by_id(id){
    return request({
        url: '/prison/filelist/info/' + id,
        method: 'get',
    })
}

//修改指定id档案
export function update_file_list_by_id(fileList){
    return request({
        url: '/prison/filelist/update/',
        method: 'post',
        data: fileList,
    })
}