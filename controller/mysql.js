const connect = require('../database/mysql')
const DB_NAME = process.env.DB_NAME
const userTable = process.env.DB_USER_TABLE
const courseTable = process.env.DB_COURSE_TABLE
const attendTable = process.env.DB_ATTENDANCE_TABLE
// 
// DB_USER_TABLE=users
// DB_COURSE_TABLE=courses
// DB_ATTENDANCE_TABLE=attendance

exports.insertUser = async (req, res) => {
    const user = req.body
    connect.query(`
    INSERT INTO '${DB_NAME}'.'${userTable}' 
    (
        'email',
        'password',
        'username',
        'avatar_src',
        'role',
        'name')
        VALUES
        (
         "${user.email}",
         "${user.password}",
         "${user.username}" ,
         "${user.avatar_src}",
         ${user.role},
         "${user.name}");
    `, (err, result) => {
        if (err) {
            res.json({
                res: 'failed'
                ,
                msg: err
            })
            throw err
        }
        console.log("Success ", result)
        res.json({
            res: 'success',
            msg: `${user} has been added`
        })
    })
}

exports.findUser = async (username)=>{
    
} 