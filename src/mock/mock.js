const Mock = require('mockjs')

//模拟后台接口数据

const Random = Mock.Random
BASE_URL = `${ process.env.VUE_APP_BASE_API}/prison`

let scores = {
    status: 200,
    msg: 'success',
    data: null,
}


//模拟主页的安全等级分数
Mock.mock(`${ BASE_URL }/scores`, 'get', () =>{
    scores.data = {
        score: Random.float(0, 1, 1, 1)
    }

    return scores;
})

//模拟eventPage的后台数据
