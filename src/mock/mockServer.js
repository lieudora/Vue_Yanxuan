/*
* 使用mockjs提供mock数据接口
* */

import Mock from 'mockjs'
import datahome from './datahome'
import datashiwu from './datashiwu'
import datafenlei from './datafenlei'
import data from './data'

// 返回接口

// 首页
Mock.mock('/maison', {code:0, data:datahome})

// 识物
Mock.mock('/chose', {code:0, data:datashiwu})

// 分类
Mock.mock('/classifier', {code:0, data:datafenlei})
