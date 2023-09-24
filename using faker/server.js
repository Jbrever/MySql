const {faker} = require('@faker-js/faker')
const mysql = require('mysql2')
const connection =mysql.createConnection( {
  host:'localhost',
  user:'root',
  database:'userInfo',
  password:'1234'
})


const fun = ()=>{   //copied by npm offical website 
  return [
    faker.string.uuid(),
    faker.internet.userName(), 
    faker.internet.password(),

  ];
};

let data = [];
for(let i =0;i<100;i++){
  data.push(fun())
}

const q = 'insert into one (id , name , password) values ?';

try{
  connection.query(q,[data],(err,res)=>{
    if(err) throw err;
    console.log(res)
 })
}
catch{
  console.log(err)
}

try{
  connection.query('select * from information',(err,res)=>{
    if(err) throw err;
    console.log(res[0])
  })
}
catch{
  console.log(err)
}

connection.end()