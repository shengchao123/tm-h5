<template>
  <div>
    <iframe v-if="file"
            :src="fileUrl"
            width='100%'
            height='800px'
            frameborder='no'></iframe>
    <div v-else
         class="center mt32 bold">文件不存在</div>
  </div>
</template>
<script>
const pdfTypes = ['pdf']
const wordTypes = ['xls', 'xlsx', 'doc', 'docx']
export default {
  data () {
    return {
      file: '',
      fileType: ''
    }
  },
  computed: {
    fileUrl () {
      const file = this.file
      const fileType = this.fileType
      const fileHost = this.$fileHost
      if (pdfTypes.includes(fileType)) {
        return fileHost + file
      } else if (wordTypes.includes(fileType)) {
        return 'https://view.officeapps.live.com/op/view.aspx?src=' + fileHost + file
      }
    }
  },
  onLoad (option) {
    this.file = option.url || ''
    this.fileType = option.fileType || ''
  }
}
</script>