import AMap from 'AMap'

// 将点位定位度换成地图所需经纬度
export const getAMapLngLat = function (_point) {
  if (_point.location) {
    const { lat, lng } = _point.location
    return new AMap.LngLat(lng, lat)
  } else {
    const { lat, lng } = _point
    return new AMap.LngLat(lng, lat)
  }
}
// 获取经纬度
export const getLngLat = function (_point) {
  if (!_point) return
  if (_point.location) {
    const { lat, lng } = _point.location
    return { lat, lng }
  } else {
    const { lat, lng } = _point
    return { lat, lng }
  }
}
// 获取经纬度
export const beginGuide = function (act, guidePoint) {
  const _location = getLngLat(guidePoint)
  switch (act.name) {
    case '百度地图':
      // window.location.href = `http://api.map.baidu.com/direction?origin=latlng:${scenicSpot.lng},${scenicSpot.lat}|name:${scenicSpot.name}&destination=name:${_guidePoint.name}|latlng:${_guidePoint.lng},${_guidePoint.lat}&output=html&mode=walking&region=杭州市`
      break
    case '腾讯地图':
      window.location.href = `https://apis.map.qq.com/uri/v1/routeplan?type=walk&to=${guidePoint.name}&tocoord=${_location.lng},${_location.lat}&policy=1&coord_type=1&referer=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77`
      break
    case '高德地图':
      window.location.href = `http://uri.amap.com/navigation?to=${_location.lng},${_location.lat},${guidePoint.name}&mode=walk&policy=1&callnative=1`
      break
  }
}
