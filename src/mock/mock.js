const Mock = require('mockjs')

//模拟后台接口数据

const Random = Mock.Random

let scores = {
    status: 200,
    msg: 'success',
    data: null,
}


//模拟主页的安全等级分数
Mock.mock(`${ process.env.VUE_APP_BASE_API}/prison/scores`, 'get', () =>{
    scores.data = {
        score: Random.float(0, 1, 1, 1)
    }

    return scores;
})

