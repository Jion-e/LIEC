import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters'
import * as actions from './actions'
import news from './modules/news'
Vue.use(Vuex);

// const state = {
//     newsItem: {},
//     newsList: [],
//     webTypes: {},
//     moduleTypes: {},
// }

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    // state,
    getters,
    actions,
    modules: {
      news,
    },
    // mutations,
    // strict: debug,
})
