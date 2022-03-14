import {request} from "@/utils/request";
import id from "element-ui/src/locale/lang/id";

export function get_file_list(){
    return request({
        url: '/prison/filelist/list',
        method: 'get',
    })
}

export function delete_file_list(ids){
    return request({
        url: '/prison/filelist/delete',
        method: 'get',
        data: [ids,],
    })
}