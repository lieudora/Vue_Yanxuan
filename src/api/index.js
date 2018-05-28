/*
* 包含N个接口请求函数的模块
* 函数的返回值
* */

// 获得首页数据
export const reqMaison = () => ajax('/maison')

// 获得识物数据
export const reqChose = () => ajax('/chose')

// 获得分类数据
export const reqClassifier = () => ajax('/classifier')
