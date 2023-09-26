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

const userEdit =(req,resp)=>{
    const id = req.params.id
    console.log(id)
    let q = `select * from one where id='${id}'` 
    connection.query(q,(err,result) =>{
        let data = result[0]
        console.log(data)
        resp.render('edit',{data}) 
    })
  
}

const patchUser =(req,resp)=>{
    const {username:newname , password:formpass} = req.body
    const id = req.params.idd
    console.log(newname , formpass , id)
    try{
        let q = `select * from one where id='${id}'`
        connection.query(q,(err,resutl)=>{
            let data = resutl[0];
            if (formpass != data.password){
                resp.send('worng password')
            }
            console.log(data) 
            resp.send('juber')
      })
      if(err) throw err;
    }
    catch(err){
        console.log('dshdafhhfdhdhfd erorrrrrrrr')
        resp.send('somthing wrong please try again')
    }
    
    resp.send('sddddd')
    
}
module.exports = {countData , allUser,userEdit , patchUser}