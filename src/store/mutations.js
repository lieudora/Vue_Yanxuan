/*
* 直接改变state的方法
* */

import {
  RECEIVE_MAISON,
  RECEIVE_CLASSIFIER,
  RECEIVE_CHOSE,
  LOGINWAY
}from './mutation-type'

export default {
  [RECEIVE_MAISON] (state, {maison}) {
    state.maison = maison
  },
  [RECEIVE_CHOSE] (state, {chose}) {
    state.chose = chose
  },
  [RECEIVE_CLASSIFIER] (state, {classifier}) {
    state.classifier = classifier
  },
  [LOGINWAY] (state, loginway) {
    state.loginway = loginway
  }
}
