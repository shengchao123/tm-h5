
export function isEmpty (value) {
  var type
  if (value == null || value === undefined || value === 'undefined') { // 等同于 value === undefined || value === null
    return true
  }
  type = Object.prototype.toString.call(value).slice(8, -1)
  switch (type) {
    case 'String':
      return value.trim() === ''
    case 'Array':
      return value.length === 0
    case 'Object':
      return JSON.stringify(value) === '{}' // 普通对象使用 for...in 判断，有 key 即为 false
    default:
      return false // 其他对象均视作非空
  }
};

// 删除对象中空的属性
export function deleteObjectEmptyAttr (obj) {
  Object.keys(obj).forEach((key) => {
    if (isEmpty(obj[key])) {
      delete obj[key]
    }
  })
  return obj
}

/**
 * keyArr新数组对象的属性集合 ['attr', {oldAttr: newAttr}]
 * arr原数组对象
 */
export function getAttrFromArray (keyArr, arr) {
  const newArr = []
  arr.forEach((e, index) => {
    keyArr.forEach(key => {
      if (!newArr[index]) newArr[index] = {}
      if (Object.prototype.toString.call(key) === '[object String]') {
        newArr[index][key] = e[key]
      } else {
        const oldKey = Object.keys(key)[0]
        const newKey = key[oldKey]
        newArr[index][newKey] = e[oldKey]
      }
    })
  })
  return newArr
}

// 数值分隔方法 1000,000,000 可自定义：分隔数量，分隔符号
export function numSeparate (num, step = 3, symbol = ',') {
  let str = (num || 0).toString()
  let result = ''
  while (str.length > step) {
    result = symbol + str.slice(-step) + result
    str = str.slice(0, str.length - step)
  }
  if (str) { result = str + result }
  return result
}

// 节流
export function throttle (fn, wait, immediate) {
  let timer = null
  let callNow = immediate
  return function () {
    const context = this
    const args = arguments
    if (callNow) {
      fn.apply(context, args)
      callNow = false
    }
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, wait)
    }
  }
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

/**
 * 创建唯一的字符串
 * @return {string}
 */
export function generateUUID () {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 32; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23]
  var uuid = s.join('')
  return uuid
}

// 字段名称更换
export function replaceKeyName (obj, typeArr) {
  let result
  const toString = Object.prototype.toString
  if (toString.call(obj) === '[object Array]') {
    result = []
    for (let i = 0; i < obj.length; i++) {
      result[i] = replaceKeyName(obj[i], arguments[1])
    }
  } else if (toString.call(obj) === '[object Object]') {
    result = {}
    for (const _key in obj) {
      // Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(_key)) {
        let flag = 0; let _value = null
        for (let j = 0; j < arguments[1].length; j++) {
          if (arguments[1][j].key === _key) {
            flag = 1
            _value = arguments[1][j].value
          }
        }
        if (flag) { result[_value] = replaceKeyName(obj[_key], arguments[1]) } else { result[_key] = replaceKeyName(obj[_key], arguments[1]) }
      }
    }
  } else {
    return obj
  }
  return result
}
