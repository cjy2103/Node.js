// Express 애플리케이션 설치
const express = require('express')
const mysql = require('mysql')

const app = express()

const port = 3000

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test_user',
    password: '1q2w3e4r',
    database: 'test_db'
})

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'test_user',
//     password: '1q2w3e4r',
//     database: 'test_db',
//   });
  

//라우팅 설정
app.get('/', (req,res) => {
    res.send('Hello World')
})


app.get('/test', (req,res) => {
    connection.query(
        'SELECT * FROM test', (error, results) => {
            if(error){
                throw error
            }
            console.log(`결과 ${JSON.stringify(results[0])}`)

            res.send(results[0])
        }
    )
})


// pool.getConnection((error, connection) => {
//     if (error) {
//       throw error;
//     }
  
//     connection.query('SELECT * FROM test', (error, results) => {
//       if (error) {
//         throw error;
//       }
  
//       // 데이터 처리
//       console.log(`결과 ${JSON.stringify(results)}`)
//     });
  
//     // 연결 풀에 연결 반환
//     connection.release();
//   });

// 서버 시작
app.listen(port, () => {
    console.log(`포트 ${port}으로 서버 시작`)
})

