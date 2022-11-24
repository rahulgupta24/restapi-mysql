const express = require('express')

const mysql = require('../database/sqlconnector')
const route = express.Router()

const bodyparser = require('body-parser')
//const  Router  = require('express')

route.use(bodyparser.json())

route.get('/:sno',(req,res,next)=>{
    var sno = req.params.sno;
    var sql = `select * from library where sno="${sno}"`;
    mysql.query(sql,(err,row,fields)=>{
        if(err){
            res.status(500).send({error:"There is some error"})
        }
            res.json(row[0])
    })
})

route.post('/create',(req,res,next)=>{
    var book = req.body.book;
    var author = req.body.author;
    console.log(book)
    console.log(author)

    var sql = `insert into library (book,author) values ("${book}","${author}")`;
    mysql.query(sql,(err,result)=>{
        if(err){
            res.status(500).send({error:"There is some error"})
        }
        res.json({'status':"Book input created successfuly",sno: result.insertId})
    })
})

route.put('/update/:sno',(req,res,next)=>{
    var sno = req.params.sno;
    var name = req.body.book;
    var author = req.body.author;

    var sql = `update library set book="${name}",author="${author}" where sno=${sno}`;
    mysql.query(sql,(err,result)=>{
        if(err){
            res.send(500).send({error:'There is some error'})
        }
        res.json({'status':'successfully updated'})
    })
})

route.delete('/delete/:sno',(req,res,next)=>{
    var sno = req.params.sno;
    var sql = `delete from library where sno=${sno}`;

    mysql.query(sql,(err,result)=>{
        if(err){
            res.status(500).send({error: "There is some error"})
        }
        res.json({'status': "Successfully deleted"})
    })

})


module.exports = route;