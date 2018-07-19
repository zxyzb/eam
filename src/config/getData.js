import http from './axios'


export const getPermission = () => http.post('/menu/list',{})

//登录退出
export const login = () => http.post('/user/login',{})

export const loginOut = () => http.post('/user/loginOut',{})

// 菜单权限
export const userTableList = (param) => http.post('/user/tableList',param)


//获取菜单树
export const getTreeData = () => http.post('/menu/tree',{})

//echarts data
export const getEchartsData = () => http.post('/manage/charts_data',{})

//role
export const getRole = () => http.post('/user/user_role',{})

//risk approval
export const riskApproval = ()=> http.post('/approval/risk_approval_list',{})