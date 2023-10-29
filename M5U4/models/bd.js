var mysql=require('mysql');
var util=require('util');

var pool=mysql.createPool({ // COLOCO LOS DATOS DIRECTAMENTE YA QUE POR ALGUN MOTIVO GENERA ERROR COLOCANDO LOS DATOS COMENTADOS ABAJO
    connectionLimit: 10,
    host: 'localhost',
    database: 'cursoreact',
    user: 'root',
    password: '123'
})
pool.query=util.promisify(pool.query);
module.exports=pool;

// CUANDO UTILIZO LAS VARIABLES DE ENTORNO GENERA ERROR:
//var pool=mysql.createPool({ 
//   connectionLimit: 10,
//   host: process.env.MYSQL_HOST,
//   database: process.env.MYSQL_DB_NAME,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD
//})

