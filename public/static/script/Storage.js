// 本地存储数据的键名
const CITY_KEY = "city-vue"
const USER_KEY = "user-vue"
const CART_KEY = "cart-vue"
const URL_KEY = "url-vue"

export function appToken () {   // 获取 APP 环境下的 token
    /* eslint-disable */
    var userObject = {}
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/jiabeiAppAndroid/i) == 'jiabeiappandroid' && window.AndroidWebView.getUser) {
        // 获取安卓webView存储的信息
        userObject = JSON.parse(window.AndroidWebView.getUser())
        if (userObject.name !== '') {
            return userObject.name
        } else {
            return ''
        }
    } else if (ua.match(/jiabeiAppIOS/i) == 'jiabeiappios' && typeof(window.iosWeixinPay) !== 'undefined' && window.iosWeixinPay.getUser) {
        // 获取微信存储的信息
        userObject = JSON.parse(window.iosWeixinPay.getUser())
        if (userObject.name !== '') {
            return userObject.name
        } else {
            return ''
        }
    } else {
        return ''
    }
    /* eslint-disable */
}

export function getCity () {        // 获取城市信息（作为是否初次登录判断）
    return JSON.parse(window.myStorage.getItem(CITY_KEY) || '[]')
}

export function saveCity (item) {   // 保存城市信息
    window.myStorage.setItem(CITY_KEY, JSON.stringify(item))
}

export function getCart () {        // 获取本地存储的购物车信息
    return JSON.parse(window.myStorage.getItem(CART_KEY) || '[]')
}

export function saveCart (item) {   // 保存商品到购物车
    window.myStorage.setItem(CART_KEY, JSON.stringify(item))
}

export function getToken () {       // 获取 token
	return JSON.parse(window.myStorage.getItem(USER_KEY) || '[]')
}

export function saveToken (item) {   // 保存 token
    window.myStorage.setItem(USER_KEY, JSON.stringify(item))
}

export function getUrl () {         // 获取需要返回上一页的URL
    return JSON.parse(window.myStorage.getItem(URL_KEY) || '[]')
}

export function saveUrl (item) {    // 保存当页url
    window.myStorage.setItem(URL_KEY, JSON.stringify(item))
}