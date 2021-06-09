export const playTimeOptions = Object.freeze([
  { id: '01', name: '半天' },
  { id: '02', name: '1天' },
  { id: '03', name: '2天' },
  { id: '04', name: '3天' }
])

export const activityTypeOptions = Object.freeze([
  { id: '01', name: '党员活动' },
  { id: '02', name: '学习教育' },
  { id: '03', name: '观光游览' },
  { id: '04', name: '其他' }
])

export const needLifeDocumentaryOptions = Object.freeze([
  { id: true, name: '需要' },
  { id: false, name: '不需要' },
])

export const transportationOptions = Object.freeze([
  { id: '01', name: '包车' },
  { id: '02', name: '公共交通' },
  { id: '03', name: '自行前往' },
  { id: '04', name: '自驾' },
  { id: '05', name: '骑行' },
  { id: '06', name: '步行' },
])
// 适宜人群
export const appropriateCrowdOptions = [
  { id: '01', name: '家庭游', isSelected: false },
  { id: '02', name: '亲子游', isSelected: false },
  { id: '03', name: '团建拓展', isSelected: false },
  { id: '04', name: '朋友聚会', isSelected: false },
  { id: '05', name: '情侣游', isSelected: false },
  { id: '06', name: '夕阳红', isSelected: false },
]
// 服务内容 
export const serviceContentOptions = [
  { id: '01', name: '吃饭', isSelected: false },
  { id: '02', name: '住宿', isSelected: false },
  { id: '03', name: '免费停车', isSelected: false },
  { id: '04', name: '烧烤', isSelected: false },
  { id: '05', name: '采摘', isSelected: false },
  { id: '06', name: '钓鱼', isSelected: false },
  { id: '07', name: '骑马', isSelected: false },
  { id: '08', name: '戏水', isSelected: false },
  { id: '09', name: '露营', isSelected: false },
]

export const playTimeNameMap = new Map([
  ['01', '半天'],
  ['02', '1天'],
  ['03', '2天'],
  ['04', '3天'],
])

export const activityNameMap = new Map([
  ['01', '党员活动'],
  ['02', '学习教育'],
  ['03', '观光游览'],
  ['04', '其他'],
])

export const transportationNameMap = new Map([
  ['01', '包车'],
  ['02', '公共交通'],
  ['03', '自行前往'],
  ['04', '自驾'],
  ['05', '骑行'],
  ['06', '步行'],
])

// 状态 (01:报名中; 02:进行中; 03:已结束)
export const statusMap = Object.freeze(new Map([
  ['01', { text: '报名中', color: '#F54000' }],
  ['02', { text: '进行中', color: '#FFB319' }],
  ['03', { text: '已结束', color: '#999999' }],
]))