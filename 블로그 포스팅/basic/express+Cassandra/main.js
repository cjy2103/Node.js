// Express 애플리케이션 설치
const express = require('express')

const app = express()

const port = 3000

//라우팅 설정
app.get('/', (req,res) => {
    res.send('Hello World')
})

// 서버 시작
app.listen(port, () => {
    console.log(`포트 ${port}으로 서버 시작`)
})

