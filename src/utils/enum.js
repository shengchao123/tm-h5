// 渐变背景颜色枚举
export const gradientBgColor = Object.freeze([
  'linear-gradient(225deg, #0079ff 0%, #2ea5ff 100%)',
  'linear-gradient(225deg, #DBA37D 0%, #E9C2A1 100%)',
  'linear-gradient(225deg, #8292A4 0%, #A9B2BF 100%)',
  'linear-gradient(225deg, #EBA85B 0%, #EDBC73 100%)',
  'linear-gradient(225deg, #424E64 0%, #7898CA 100%)',
  'linear-gradient(225deg, #232124 0%, #52525A 100%)'
])
export const onlyRefunds = new Map([
  [1, {
    index: 1,
    title: '等待商家处理',
    time: true,
    btnList: [{ class: 'normal secondary-text', text: '取消申请', eventType: 'cancel' },
    { class: 'normal secondary-text', text: '修改申请', eventType: 'edit' }]
  }],
  [4, {
    index: 1,
    title: '等待商家处理',
    time: false
  }],
  [2, {
    index: 2,
    title: '退款成功',
    time: false
  }],
  [3, {
    index: -1,
    title: '退款关闭',
    time: false,
    btnList: [{ class: 'normal secondary-text', text: '申请客服', eventType: 'apply', applyStatus: false },
    { class: 'normal secondary-text', text: '重新申请', eventType: 'again', applyStatus: true }]
  }]
])
export const refunds = new Map([
  [1, {
    index: 1,
    title: '等待商家处理',
    time: true,
    btnList: [{ class: 'normal secondary-text', text: '取消申请', eventType: 'cancel' },
    { class: 'normal secondary-text', text: '修改申请', eventType: 'edit' }]
  }],
  [5, {
    index: 2,
    title: '商家已同意申请，请先退货并填写物流信息',
    time: false,
    btnList: [{ class: 'normal secondary-text', text: '取消申请', eventType: 'cancel' },
    { class: 'primary secondary-text', text: '填写单号', eventType: 'write' }]
  }],
  [6, {
    index: 3,
    title: '等待商家退款',
    time: false
  }],
  [4, {
    index: 3,
    title: '等待商家退款',
    time: false
  }],
  [2, {
    index: 4,
    title: '退款成功',
    time: false
  }],
  [3, {
    index: -1,
    title: '退款关闭',
    time: false,
    btnList: [{ class: 'normal secondary-text', text: '申请客服', eventType: 'apply', applyStatus: false },
    { class: 'normal secondary-text', text: '重新申请', eventType: 'again', applyStatus: true }]
  }]
])
export const exchange = new Map([
  [1, {
    index: 1,
    title: '等待商家处理',
    time: true,
    btnList: [{ class: 'normal secondary-text', text: '取消换货', eventType: 'cancel' },
    { class: 'normal secondary-text', text: '修改申请', eventType: 'edit' }]
  }],
  [5, {
    index: 2,
    title: '商家已同意申请，请先退货并填写物流信息',
    time: false,
    btnList: [{ class: 'normal secondary-text', text: '取消申请', eventType: 'cancel' },
    { class: 'primary secondary-text', text: '填写单号', eventType: 'write' }]
  }],
  [6, {
    index: 3,
    title: '等待商家发货',
    time: false
  }],
  [7, {
    index: 3,
    title: '等待商家发货',
    time: false
  }],
  [8, {
    index: 4,
    title: '待收货',
    time: true,
    btnList: [{ class: 'primary secondary-text', text: '确认收货', eventType: 'confirm' }]
  }],
  [2, {
    index: 5,
    title: '换货成功',
    time: false
  }],
  [3, {
    index: -1,
    title: '换货关闭',
    time: false,
    btnList: [{ class: 'normal secondary-text', text: '申请客服', eventType: 'apply', applyStatus: false },
    { class: 'normal secondary-text', text: '重新申请', eventType: 'again', applyStatus: true }]
  }]
])
export const mail = new Map([
  [1, {
    index: 1,
    title: '等待商家处理',
    time: true,
    btnList: [{ class: 'normal secondary-text', text: '取消申请', eventType: 'cancel' },
    { class: 'normal secondary-text', text: '修改申请', eventType: 'edit' }]
  }],
  [7, {
    index: 2,
    title: '等待商家发货',
    time: false
  }],
  [8, {
    index: 3,
    title: '待收货',
    time: true,
    btnList: [{ class: 'primary secondary-text', text: '确认收货', eventType: 'confirm' }]
  }],
  [2, {
    index: 4,
    title: '补寄成功',
    time: false,
    btnList: [{ class: 'normal secondary-text', text: '删除记录', eventType: 'delete' }]
  }],
  [3, {
    index: -1,
    title: '补寄关闭',
    time: false,
    btnList: [{ class: 'normal secondary-text', text: '删除记录', eventType: 'delete' },
    { class: 'normal secondary-text', text: '申请客服', eventType: 'apply', applyStatus: false },
    { class: 'normal secondary-text', text: '重新申请', eventType: 'again', applyStatus: true }]
  }]
])
export const afterType = new Map([
  ['01', {
    stepsIndex: onlyRefunds,
    list: ['提交申请', '商家处理', '退款成功']
  }],
  ['02', {
    stepsIndex: onlyRefunds,
    list: ['提交申请', '商家处理', '退款成功']
  }],
  ['03', {
    stepsIndex: refunds,
    list: ['提交申请', '商家处理', '寄回商品', '商家退款', '退款成功']
  }],
  ['04', {
    stepsIndex: exchange,
    list: ['提交申请', '商家处理', '寄回商品', '商家发货', '买家收货', '处理完成']
  }],
  ['05', {
    stepsIndex: mail,
    list: ['提交申请', '商家处理', '商家发货', '买家收货', '处理完成']
  }]
])

export const onlyRefundsTitle = new Map([
  [1, '等待商家处理'], //time
  [3, '退款成功'],
  [-1, '退款关闭']
])
export const refundsTitle = new Map([
  [1, '等待商家处理'],    //time
  [2, '退货并填写物流信息'],
  [3, '等待商家同意退款'],
  [4, '退款成功'],
  [-1, '退款关闭']
])
export const exchangeTitle = new Map([
  [1, '等待商家处理'],  //time
  [2, '退货并填写物流信息'],
  [3, '等待商家发货'],
  [4, '待收货'],  //time
  [5, '换货成功'],
  [-1, '换货关闭']
])
export const mailTitle = new Map([
  [1, '等待商家处理'],  //time
  [2, '等待商家发货'],
  [3, '待收货'],  //time
  [4, '补寄成功'],
  [-1, '补寄关闭']
])
export const titleType = new Map([
  ['01', onlyRefundsTitle],
  ['02', onlyRefundsTitle],
  ['03', refundsTitle],
  ['04', exchangeTitle],
  ['05', mailTitle]
])

export const afterTypeName = new Map([
  ['01', '仅退款'],
  ['02', '仅退款'],
  ['03', '退货退款'],
  ['04', '换货'],
  ['05', '补寄']
])

export const agreementMap = new Map([
  ['分销协议', '分销员通过分享自己链接/二维码拉新用户注册，注册成功后该会员与分销员绑定6个月，6个月内该用户购买商品按商品设置分佣比例获得佣金。若该用户在6个月内未购买商品，则与该分销员解除绑定若该用户6个月内购买商品，绑定时间以最后一次购买时间开始计算。例：用户于1月1日与分销员绑定，用户于3月1日购买商品，则解绑时间为9月1日要与分销员说明，6个月绑定时间仅为平台开始时享有，后期将缩短绑定时间。'],
  ['邀请规则', '正在编写中......'],
  ['支付入件协议', '正在编写中......'],
  ['分销返佣协议', '正在编写中......'],
])

export const findEntranceByActivityType = new Map([
  ['06', 'joinGroup'], // 拼团
  ['07', 'spike'],  // 秒杀
  ['08', 'exclusive'] // 专享
])

export const homeGoodsListReqName = new Map([
  ['0001', 'findAllGoodsByPage'], // 精选商品
  ['0101', 'findLabelGoodsByPage'], // 商品栏
  ['0204', 'findGroupBookingGoodsByPage'],  // 拼团专区
  ['0205', 'findSeckillGoodsByPage'], // 秒杀专区
  ['0206', 'findSpecialGoodsByPage'], // 商城活动 // 员工专享
  ['0207', 'findCombinationGoodsByPage'], // 组合商品
])

export const homeLookMoreUrl = new Map([
  ['0001', '/pagesHome/type-of-goods/index'], // 精选商品
  ['0101', '/pagesHome/type-of-goods/index'], // 商品栏
  ['0204', '/pagesUser/spell-group/index/index'],  // 拼团专区
  ['0205', '/pagesHome/spike-goods/index'], // 秒杀专区
  ['0206', '/pagesHome/type-of-goods/index'], // 商城活动 // 员工专享
  ['0207', '/pagesHome/compose-goods/index'], // 组合商品
])