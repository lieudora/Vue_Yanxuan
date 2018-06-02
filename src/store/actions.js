/*
*通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_MAISON,
  RECEIVE_CLASSIFIER,
  RECEIVE_CHOSE,
  LOGINWAY
}from './mutation-type'

import {
  reqMaison,
  reqClassifier,
  reqChose
} from '../api'

export default {
  // 异步获取首页数据
  async getMaison({commit}) {
    const result = await reqMaison()
    if(result.code === 0) {
      const maison = result.data
      commit(RECEIVE_MAISON, {maison})
    }
  },

  // 异步获取识物数据
  async getChose({commit}) {
    const result = await reqChose()
    if(result.code === 0) {
      const chose = result.data
      commit(RECEIVE_CHOSE, {chose})
    }
  },

  // 异步获取分类数据
  async getClassifier({commit}) {
    const result = await reqClassifier()
    if(result.code === 0) {
      const classifier = result.data
      commit(RECEIVE_CLASSIFIER, {classifier})
    }
  },

  // 获取 loginWay ，loginWay放state中，在Register里面直接取。$router.replace跳转到对用的手机登录和邮箱登录
  getloginWay({commit},loginway) {
    commit(LOGINWAY, loginway)
  }
}
