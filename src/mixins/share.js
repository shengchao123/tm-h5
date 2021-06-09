const share = {
  data () {
    return {
      showHomeBtn: false,
      isShareIn: false,
    }
  },
  methods: {
    onPage () {
      if (!this.isShareIn) return
      this.showHomeBtn = !this.showHomeBtn
    }
  },
  onLoad (option) {
    if (option.masterOrgId) {
      this.showHomeBtn = true
      this.isShareIn = true
      uni.setStorageSync('masterOrgId', option.masterOrgId)
      uni.setStorageSync('orgId', option.masterOrgId)
    }
  },
}
export default share
