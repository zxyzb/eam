// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
// http://mockjs.com/ 文档地址

const produceNewsData = () => {
    let articles = [];
    for (let i = 0; i < 20; i++) {
        let newArticleObject = {
            title: Random.csentence(5,10), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        articles: articles,
        userInfo:{
            name:Random.cname(),
            zip:Random.zip(),
            idCard:Random.id(),
        },
        msg:"success",
        success:true
    }
}

const deleteData = () => {
    return {
        msg:"删除成功",
        success:false
    }
}

//菜单配置
const menuData = () =>{

    return [{
            title:'首页',
            path:'/home',
            index:'1',
            meta:{
                permission:[]
            }
        },{
            title:'用户管理',
            index:'2',
            child:[{
                title:'用户列表',
                path:'/user/list',
                index:'2-1',
                meta:{
                    permission:['edit','delete']
                }
            },{
                title:'菜单管理',
                path:'/user/role',
                index:'2-2',
                meta:{
                    permission:[]
                }
            }]
        },{
            title:'产品管理',
            index:'3',
            child:[{
                title:'订单列表',
                path:'/order/list',
                index:'3-1',
                meta:{
                    permission:[]
                },
                child:[{
                    title:'订单列表',
                    path:'/order/list',
                    index:'3-1-1',
                }]
            },{
                title:'数据统计',
                path:'/manage/echarts',
                index:'3-2',
                meta:{
                    permission:[]
                }
            }]
        }]
}



//登录  用户信息存入localstorage
const login = ()=>{
    return {
        userInfo:{
            userId:Random.guid(),
            name:Random.cname()
        },
        success:true,
        msg:'success'
    }
}

//用户退出
const loginOut = () =>{
    return {
        msg:"操作成功",
        success:true
    }
}

//表格数据

const tableData = () =>{
    let userList = [];
    for(let i=0;i<10;i++){
        let list = {
            date: '2016-05-02',
            name:  Random.cname(),
            address: '上海市普陀区金沙江路 1518 弄',
            userId: Random.guid()
        }
        userList.push(list)
    }

    return {
        list:{
            header:[{
                label:'日期',
                name:'date',
            },{
                label:'姓名',
                name:'name',
            },{
                label:'地址',
                name:'address',
            },{
                label:'用户ID',
                name:'userId',
            }],
            body:userList,
            currentPageSize:20,
        },
        success:true,
        msg:'success'
    }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/tableList','post',tableData)
Mock.mock('/user/login','post',login);
Mock.mock('/user/loginOut','post',loginOut);
Mock.mock('/menu/list','post',menuData);
