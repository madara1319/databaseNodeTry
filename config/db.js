require('dotenv').config(); 
const mysql=require('mysql2');

console.log(process.env.DB_HOST); // Powinno wyświetlić 'localhost'
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD); // Powinno wyświetlić hasło
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
})

let sql = "SELECT * FROM posts;";

pool.execute(sql,function(err,result){
    if(err) throw err;
    //console.log(result);
    result.forEach((res)=>{
    console.log(res.title);
    });

});

module.exports = pool.promise();
