/*
* 直接改变state的方法
* */

import {
  RECEIVE_MAISON,
  RECEIVE_CLASSIFIER,
  RECEIVE_CHOSE
}from './mutation-type'

export default {
  [RECEIVE_MAISON] (state, {maison}) {
    state.maison = maison
  },
  [RECEIVE_CLASSIFIER] (state, {classifier}) {
    state.maison = classifier
  },
  [RECEIVE_CHOSE] (state, {chose}) {
    state.maison = chose
  }
}
