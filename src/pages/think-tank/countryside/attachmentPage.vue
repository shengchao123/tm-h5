<template>
  <div>
    <div v-if="file">
      <iframe :src="fileUrl"
              width='100%'
              height='800rpx'
              frameborder='no'
              scrilling="no"
              class="iframe"
              v-if="!showPdf"></iframe>
      <div v-if="showPdf">
        <pdf v-for="i in numPages"
             :key="i"
             :src="$fileHost + file"
             :page="i"
             class="demo"></pdf>
      </div>

    </div>
    <div v-else
         class="center mt32 bold">文件不存在</div>
  </div>
</template>
<script>
const pdfTypes = ['pdf']
const wordTypes = ['xls', 'xlsx', 'doc', 'docx']
import pdf from 'vue-pdf'
export default {
  data () {
    return {
      file: '',
      fileType: '',
      numPages: []
    }
  },
  components: {
    pdf
  },
  methods: {
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
        this.numPages.push(i + 1)
      }
    }
  },
  computed: {
    fileUrl () {
      const file = this.file
      const fileType = this.fileType
      const fileHost = this.$fileHost
      if (wordTypes.includes(fileType)) {
        return 'https://view.officeapps.live.com/op/view.aspx?src=' + fileHost + file
      }
    },
    showPdf () {
      const fileType = this.fileType
      if (pdfTypes.includes(fileType)) return true
      return false
    }
  },
  onLoad (option) {
    this.file = option.url || ''
    this.fileType = option.fileType || ''
    this.getNumPages(this.$fileHost + option.url)
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