const mysql = require('mysql')

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const connection = mysql.createConnection(config)

connection.connect((err)=>{
    if(err) {
        throw err;
    }
    console.log("Connected!")
})

module.exports = connection