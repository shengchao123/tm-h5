<template>
  <div>
    <div v-if="file">
      <pdf v-for="i in pageNumbers"
           :key="i"
           :src="$fileHost + file"
           :page="i"
           class="demo"></pdf>
    </div>
    <div v-else
         class="center mt32 bold">文件不存在</div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  data () {
    return {
      file: '',
      fileType: '',
      pageNumbers: []
    }
  },
  components: {
    pdf
  },
  methods: {
    // 获取pdf的页码
    getNumPages (url) {
      var loadingTask = pdf.createLoadingTask(url)
      loadingTask.promise.then(pdf => {
        this.getPages(pdf.numPages)
      }).catch((err) => {
        console.error('pdf加载失败', err)
      })
    },
    getPages (nums) {
      for (let i = 0; i < nums; i++) {
        this.pageNumbers.push(i + 1)
      }
    }
  },
  onLoad (option) {
    this.file = option.url || ''
    this.fileType = option.fileType || ''
    if (option.fileType === 'pdf') {
      this.getNumPages(this.$fileHost + option.url)
    }
  }
}
</script>
<style scoped lang='scss'>
.iframe {
  /deep/.ewr-sheetcontainer {
    overflow-y: hidden;
    overflow-x: auto;
  }
}
.demo {
  width: 100%;
  height: 700px;
}
</style>