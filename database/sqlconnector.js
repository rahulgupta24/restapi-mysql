var mysql1 =require('mysql')

var connection = mysql1.createPool(
    {
     user:"root",
     password:"",
     host: "localhost",
     database : "restapi"
}
)

// connection.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Connected')
// })

module.exports = connection;