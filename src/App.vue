<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang='scss'>
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "./styles/atom.scss";
@import "./styles/flex.scss";
@import "./styles/global.scss";
@import "./styles/init.scss";
/*每个页面公共css */
</style>
