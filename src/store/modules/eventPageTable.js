/**
 * eventPage页面的新增按钮，由index及eventTable1共享数据
 * @type {{mutations: {}, state: {}, actions: {}}}
 */

const newEvent = {
    state: {
        dataListSelections: [],
    },
    mutations: {
        setDataListSelections: (state, newVal) => {
            console.log(state)
            console.log(newVal)
            state.dataListSelections = newVal.val;
            console.log(state.dataListSelections)
        }
    },
    actions: {
        setDataList({commit}, val){
            commit('setDataListSelections', val)
        }
    },


}

export default newEvent
