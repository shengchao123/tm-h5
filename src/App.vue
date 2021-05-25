<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    !this.$notMember() && this.$store.dispatch('user/setMemberPersonalInfo')
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang='scss'>
@import "uview-ui/index.scss";
@import "./styles/atom.scss";
@import "./styles/flex.scss";
@import "./styles/global.scss";
@import "./styles/init.scss";
@import "./styles/u-view.scss";
/*每个页面公共css */
</style>
