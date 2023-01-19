var mysql = require('mysql');

var db = mysql.createConnection({
  host : 'project.cgx0gwgzdjyz.us-east-1.rds.amazonaws.com',
  user : 'admin',
  password : 'cloud0822',
  database : 'info_DB'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected successfully');
})

db.query(
    'select * from category_info',
    function(err, data, field){
        if(err) throw err;
        console.log(data);
    }
)