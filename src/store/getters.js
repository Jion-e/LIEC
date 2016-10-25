import moment from 'moment'

export const newsItem = state => state.news.newsItem
export const allNews = state => state.news.allNews
export const creditNews = state => state.news.allNews.filter(item => item.mType == '0')
export const lawsNews = state => state.news.allNews.filter(item => item.mType == '1')

//信用动态新闻按照发布事件降序排序并且限制5条
export const creditNewsLimit = state => {
  const count = 5
  const filterNews = state.news.allNews.filter(item => item.mType == '0')

  const sortNews = filterNews.sort((a, b) => {
    const date1 = moment(a.date).format("YYYYMMDD")
    const date2 = moment(b.date).format("YYYYMMDD")
    return date2 - date1
  })

  const limitNews = sortNews.slice(0, count)
  return limitNews
}

//信用动态新闻按照发布事件降序排序并且限制5条
export const lawsNewsLimit = state => {
  const count = 5
  const filterNews = state.news.allNews.filter(item => item.mType == '1')

  const sortNews = filterNews.sort((a, b) => {
    const date1 = moment(a.date).format("YYYYMMDD")
    const date2 = moment(b.date).format("YYYYMMDD")
    return date2 - date1
  })

  const limitNews = sortNews.slice(0, count)
  return limitNews
}
