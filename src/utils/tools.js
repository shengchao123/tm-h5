import { fileHost, imgHost } from '@/api/urls'

export const calcRpx2px = function (size) {
  const info = uni.getSystemInfoSync()
  const scale = 750 / info.windowWidth;
  let s = Number.isNaN(parseFloat(size)) ? 0 : parseFloat(size)
  let u = size.toString().replace(/[0-9]/g, '').replace('-', '')
  if (u == 'rpx') {
    s /= scale
    u = 'px'
  } else if (u == '') {
    u = 'px'
  } else if (u == 'vw') {
    u = 'px'
    s = s / 100 * 750 / scale
  }
  return s + u
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


// 按照字节长截取字符串
export function subStringWithStrlen (str, L) {
  var result = ''
  var strlen = str.length // 字符串长度
  var chrlen = str.replace(/[^x00-\xff]/g, '**').length // 字节长度

  if (chrlen <= L) { return str }

  for (var i = 0, j = 0; i < strlen; i++) {
    var chr = str.charAt(i)
    if (/[x00-\xff]/.test(chr)) {
      j++ // ascii码为0-255，一个字符就是一个字节的长度
    } else {
      j += 2 // ascii码为0-255以外，一个字符就是两个字节的长度
    }
    if (j <= L) { // 当加上当前字符以后，如果总字节长度小于等于L，则将当前字符真实的+在result后
      result += chr
    } else { // 反之则说明result已经是不拆分字符的情况下最接近L的值了，直接返回
      return result + '...'
    }
  }
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

// 网络图片和阿里云素材库判断
export function imgUrlDeal (url) {
  if (!url) return imgHost + 'home/img_placeholder.png'
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

export function swapArr (arr, index1, index2) {
  const _arr = JSON.parse(JSON.stringify(arr))
  _arr[index1] = _arr.splice(index2, 1, _arr[index1])[0];
  return _arr;
}
