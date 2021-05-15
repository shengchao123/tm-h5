import { fileHost, imgHost } from '@/api/urls'


export const calcPxFit = function (num) {
  return num * (750 / uni.getSystemInfoSync().screenHeight)
}

export const calcPx2Vh = function (num) {
  return num / uni.getSystemInfoSync().screenHeight * 100
}


export const getFullUrl = function (url) {
  /* #ifdef H5 */
  const host = '/api'
  /* #endif */
  return host + url

}
export const msg = (title, icon = 'none', duration = 1500, mask = false) => {
  //统一提示方便全局修改
  if (Boolean(title) === false) {
    return
  }
  uni.showToast({
    title,
    duration,
    mask,
    icon
  })
}

export const prePage = () => {
  let pages = getCurrentPages()
  let prePage = pages[pages.length - 2]
  // #ifdef H5
  return prePage
  // #endif
  return prePage.$vm
}

export function getUrlParam (url, name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') //构造一个含有目标参数的正则表达式对象
  var r = url.match(reg) //匹配目标参数
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null //返回参数值
}

// 处理地址补全
export function dataComplete (prop, length) {
  return dataRightCompleting(length - prop.length, '0', prop)
}
export function dataRightCompleting (bits, identifier, value) {
  value = value + Array(bits + 1).join(identifier)
  return value
}

// 等级过多时,背景色显示最后一个
export function levelListData (listLength, sourceData, itemData) {
  if (listLength > sourceData.length) {
    const num = listLength - sourceData.length
    for (var i = 0; i < num; i++) {
      sourceData.push(itemData)
    }
  } else {
    sourceData.slice(0, listLength)
  }
  return sourceData
}

//保留小数位，不进行四舍五入操作  取固定小数位  num 数字  decimal  固定小数位
export function formatDecimal (num, decimal) {
  num = num.toString()
  let index = num.indexOf('.')
  if (index !== -1) {
    num = num.substring(0, decimal + index + 1)
  } else {
    num = num.substring(0)
  }
  return parseFloat(num).toFixed(decimal)
}

export function avatarUrl (url) {
  if (!url) return imgHost + 'user/img_avatar.png'
  return url.includes('http://') || url.includes('https://') ? url : fileHost + url
}

export function replaceString (any, keyValues) {
  let _any = JSON.stringify(any)
  keyValues.forEach(item => {
    let rex = new RegExp(item.key, 'g')
    _any = _any.replace(rex, item.value)
  })
  return JSON.parse(_any)
}
