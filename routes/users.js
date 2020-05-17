
const router = require('express').Router()
const connect = require('../database/mysql')


router.post('/login')

router.get('/user', (req, res) => {
    connect.query(`select * from users`, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

router.get('/dbcreate', (req, res) => {
    connect.query(`create database s_system`, (err, result) => {
        if (err) throw err
        console.log("Database created!")
        res.json(result)
    })
})

router.get('/tablecreate', (req, res) => {
    connect.query('create table s_system.users1 (uid int not null Primary key, name varchar(200), username varchar(200), password varchar(200))',
        (err, result) => {
            if (err) throw err
            console.log("Table created!")
            res.json(result)
        })
})

router.get('/insert', (req, res) => {
    connect.query('insert into s_system.users1 values (1,"test name","test","testpass"),(2, "test name2", "test2","testpass2")',
        (err, result) => {
            if (err) throw err
            console.log("Value inserted!")
            res.json(result)
        })
})

router.get('/all', (req, res) => {
    connect.query('select * from s_system.users1', (err, result) => {
        if (err) throw err
        console.log("show all")
        res.json(result)
    })
})

router.get('/user/:id', (req, res) => {
    const id = req.params.id
    connect.query(`select * from s_system.users1 where uid = ${id}`,
        (err, result) => {
            if (err) throw err
            if (result.length === 1) {
                console.log("Found!")
                res.json(result[0])
            }else{
                console.log('Not Found!')
                res.json({})
            }
        })
})

router.post('/show/:id/:name', (req, res) => {
    const array = [
        req.params,
        req.body
    ]
    console.log(req.body)
    res.json(array)
})
module.exports = router