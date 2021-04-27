import axios from 'axios'
import { Toast } from 'vant'

// —————————————— 上传企业 Logo
const uploadUrls = new Map([
  ['a', '/api/file/fileUpload/uploadAvatar'], // 上传头像
  ['e', '/api/file/fileUpload/uploadExcel'], // 上传 excel
  ['l', '/api/file/fileUpload/uploadLogo'], // 上传 企业 logo
  ['m', '/api/file/fileUpload/uploadMaterial'] // 上传素材
])

// ——————————————————  上传文件接口
// a: 头像，l: 公司 logo，m: 素材上传
// 素材上传 type: 2: 图片，3: 视频，4: 音频
export function uploadFile (config) { // 上传图片
  const temConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      authToken: localStorage.getItem('access_token'),
      masterOrgId: localStorage.getItem('masterOrgId'),
      moduleCode: localStorage.getItem('moduleCode'),
      appCode: localStorage.getItem('appCode')
    }
  }

  const formData = new FormData()
  formData.append('files', config.file)

  if (config.uploadType === 'm') {
    formData.append('type', config.fileType)
  }
  const url = uploadUrls.get(config.uploadType)

  return new Promise((resolve, reject) => {
    axios.post(url, formData, temConfig).then(res => {
      if (res.data.code === 10000) {
        const filePaths = res.data.content.filePaths
        resolve(filePaths)
      } else {
        Toast('资源上传失败，请稍后重新上传')
      }
    })
  })
}
