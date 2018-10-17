const mysql =  require('mysql');

var connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lervin29',
    port: '3305',
    database: 'storageManager'
});

connection.connect((err) =>{
    if(err) {
        console.log(err);
    } else {
        console.log('DB connected');
    }
});
module.exports = connection;

