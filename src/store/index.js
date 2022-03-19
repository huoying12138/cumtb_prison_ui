import Vue from 'vue'
import Vuex from 'vuex'
import newEvent from "@/store/modules/eventPageTable";
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        newEvent
    },

})

export default store
