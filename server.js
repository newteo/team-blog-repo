const express = require('express')

// 文件名 `app.js` 則命名 `app`
// 文件名 `server.js` 則命名 `server`
const server = express()
const __PORT__ = process.env.PORT || 5000

// 統一靜態文件目錄 `./assets/`，有 `file-loader` 在代碼 `require` 就好
server.use('/assets', express.static('assets'))

// 請求的英文單詞 `request`，響應的英文單詞 `response`，完整單詞一看就明白
// 統一單引號優先，統一匿名函數格式 `() => {}`
server.get('*', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

server.listen(__PORT__, () => {
  console.log(`* Listening on http://localhost:${__PORT__}`)
  console.log('* Use Ctrl-C to stop')
})
