const state = {
  newsItem: {},
  allNews: [],
  creditNews: [],
  lawsNews: []
}

const mutations = {
  GET_NEWSITEM(state, newsItem){
    state.newsItem = newsItem
  },
  GET_ALLNEWS(state, allNews){
    state.allNews = allNews
  },
  // GET_CREDITNEWS(state, newsList){
  //   state.creditNews = newsList
  // },
  // GET_LAWSNEWS(state, newsList){
  //   state.lawsNews = newsList
  // }
}

export default {
  state,
  mutations
}
