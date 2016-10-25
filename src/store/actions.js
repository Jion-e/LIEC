import api from '../api'

export const fetchAllNews = ({ commit }) => {
  api.getNewsList().then(allNews => {
    commit('GET_ALLNEWS', allNews)
  })
}

export const fetchNewsItem = ({ commit }, newsID) => {
  api.getNewsItem(newsID).then(data => {
    commit('GET_NEWSITEM', data)
  })
}
