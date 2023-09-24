const {connection} = require('./connection') 
const countData=(req,resp)=>{
    const q = 'select count(*) from one'
    try{
        connection.query(q,(err,result)=>{
           if(err) throw err;
           console.log(result)
            resp.send(result[0]);
        }) 
    }
    catch{
        console.log('it\'s an error JBR',err)
    }
}

const allUser = (req,resp)=>{
   q=`select * from one`;
 try{

    connection.query(q,async(err,result)=>{
        if(err) throw err
       await resp.render('home',{
            result ,
            title:'hello duniya'
        })
       })
 }
 catch{
    console.log(err)
 }
}

module.exports = {countData , allUser}