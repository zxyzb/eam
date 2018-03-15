import http from './axios'


export const getPermission = () => http.post('/menu/list',{})

export const login = () => http.post('/user/login',{})

export const loginOut = () => http.post('/user/loginOut',{})

export const userTableList = (param) => http.post('/user/tableList',param)