import {requests} from "./type/requests"
import axios from 'axios'

export const getTaskList = () => {
    return axios<requests>({
        method:'get',
        url:'/api/getTaskList'
    })
}

export const addTaskList = (item:object) => {
    return axios<requests>({
        method:'post',
        url:'/api/addTaskList',
        data:item
    })
}

export const delTaskList = (id:string) => {
    return axios<requests>({
        method:'post',
        url:`/api/delTaskList?id=${id}`
    })
}