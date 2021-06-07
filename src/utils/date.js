import moment from "moment"

/**
 * 连续日期的过滤
 * 示例[1,2,3,4,5,19,20,30]=>["1日 至 5日","19日","20日","30日"]
 * 示例[1,2,3,5,6]=>["周一 至 周三","周五","周六"]
 * 示例['2-4','2-5','2-6','2-8','3-1']=>["2-4 至 2-6","2-8","3-1"] (暂时不需要)
 */
export function filterContinuousDate (arr, type = '01') {
  // 数组从小到大排序
  arr.sort(function (a, b) { return a > b ? 1 : -1 })
  // if (type === '04') return monthRender(arr) // 自定义日期 (暂时不需要)
  /**
   * js如何判断一组数字是否连续
   * 示例
   * arr = [3, 4, 13 ,14, 15, 17, 20, 22];
   * 判断一组数字是否连续,得到一个临时数组
   * [[3,4],[13,14,15],[17],[20],[22]];
   */
  const weekStrList = ['-', '周一', '周二', '周三', '周四', '周五', '周六', '周日']
  const result = []
  let tmp
  // eslint-disable-next-line no-cond-assign
  while (tmp = arr.shift()) {
    if (result.length === 0) {
      result.push([tmp]); continue
    }
    const e = result[result.length - 1]
    if (tmp === e[e.length - 1] + 1) {
      e.push(tmp)
    } else {
      result.push([tmp])
    }
  }
  const newArr = []
  result.forEach((el2) => {
    if (el2.length > 2) {
      if (type === '01') { // 周
        newArr.push(weekStrList[el2[0]] + ' 至 ' + weekStrList[el2[el2.length - 1]])
      } else { // 日
        newArr.push(el2[0] + '日 至 ' + el2[el2.length - 1] + '日')
      }
    } else if (el2.length === 2) {
      if (type === '01') { // 周
        newArr.push(...[weekStrList[el2[0]], weekStrList[el2[1]]])
      } else { // 日
        newArr.push(...[el2[0] + '日', el2[1] + '日'])
      }
    } else {
      newArr.push(type === '01' ? weekStrList[el2] : el2 + '日')
    }
  })
  return newArr.join(' , ')
}

export const timeFormat = (value, format) => {
  let formatString = ''
  format === 1 ? formatString = 'YYYY-MM-DD HH:mm:ss' : formatString = 'YYYY-MM-DD'
  return moment(value).format(formatString)
}

