import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
const map = {
  data () {
    return {
      search: {
        pageNumber: 1,
        keyword: ''
      },
      mescrollBottom: '0',

      upOption: {
        empty: {
          use: true, // 是否显示空布局
          icon: this.$imgHost + "order/no-order.png",
          tip: "暂无数据", // 提示
        },
        textNoMore: "",
        noMoreSize: 10, // 配置列表的总数量要大于等于10条才显示'-- END --'的提示
      },
      dataList: []
    }
  },
  methods: {
    onreachTop () {
      this.search.pageNumber = 0
    },
    onreachBottom (page) {
      this.search.pageNumber = page.num
      this.getDataList()
    },
  },
  components: {
    MescrollUni
  }
}

export default map
