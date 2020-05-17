const con = require('../database/mysql')

exports.login = (req,res)=>{
    const { username, password} = req.body
    con.query(`select * from ${process.env.DB_NAME}.${process.env.DB_USER_TABLE} 
    where username = '${username}' and password = '${password}'`,
    (err,result)=>{

    })

}