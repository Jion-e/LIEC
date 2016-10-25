import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDxUppBRTczs5FWVfmQaiqKve6zaw1_-_I",
  authDomain: "newssystem-2b6d6.firebaseapp.com",
  databaseURL: "https://newssystem-2b6d6.firebaseio.com",
  storageBucket: "newssystem-2b6d6.appspot.com",
  messagingSenderId: "830388281949"
}
firebase.initializeApp(config)

const db = firebase.database().ref()
const newsListRef = db.child('newsList').orderByChild('wType').equalTo('0')
const newsItemRef = newsID => db.child('newsList/' + newsID)


const cb = (e, ref, errText) => {
   const newsListArr = []
    return new Promise(resolve => {
      //如果查询节点存在就会执行下面的代码，否则直接返回newsListArr为空
      ref.on(e, snapshot => {
        newsListArr.push(snapshot.val())
        resolve(newsListArr)
        // console.log(newsListArr);
      }, err => {
        console.log(`${errText}:` + err.code);
      })
    })
}

export default {

  getNewsList(){
    return cb("child_added", newsListRef, "获取新闻列表失败")
  },

  getNewsItem(newsID){
    return new Promise(resolve => {
      newsItemRef(newsID).once('value', snapshot => {
        // console.log(snapshot.val());
        resolve(snapshot.val())
      }, err => {
        console.log('获取新闻详情失败' + err.code);
      })
    })
  }

}
