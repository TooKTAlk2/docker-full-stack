// 필요한 모듈 가져오기 
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

// Express 서버 생성

const app = express();

// json 형태의 요청을 해석할 수 있도록 등록
app.use(bodyParser.json())

// 테이블 생성
// db.pool.query(`CREATE TABLE lists (
//   id INTEGER AUTO_INCREMENT,
//   value TEXT,
//   PRIMARY KEY (id)
//   )`,
//   (err,results,fileds)=>{
//   console.log('results', results);
// })


// DB lists 테이블에 있는 모든 데이터를 프론트 서버로 보내기
app.get('/api/values',function(req,res){
  // 데이터베이스 lists 테이블에서 모든 정보를  가져오기
  db.pool.query('SELECT * FORM lists;',
  (err,results,fileds)=>{
    if(err){
      return res.status(500).send(err);
    }  
    else{
      return res.json(results);
    }
  })
})
// 클라이언트에서 입력받은 데이터베이스 lists 테이블에 저장하기
app.post('/api/value',function(req,res,next){
  
  // 데이터베이스에 값을 저장하기
  db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`,
  (err,results,fileds)=>{
    if(err){
      return res.status(500).send(err);
    }
    else {
      return res.json({success: true, value : req.body.value});
    }
  })
})



const PORT = 5000;


app.listen(PORT,()=>{
  console.log('애플리케이션이 5000번 포트에서 시작되었습니다.');
})
