var express=require('express');  // sets up express
var app=express();
// var router = express.Router();
var path=require('path');  // sets up paths
// var bodyParser=require('body-parser');  // sets up body-parser for POST method (for admin user feature stretch goal)
// var urlencodedParser=bodyParser.urlencoded( {extended: false} );
// var pg=require('pg');  // sets up postgres database

// var connectionString = '';

//  if(process.env.DATABASE_URL !== undefined) {
//      console.log('env connection string');
//      connectionString = process.env.DATABASE_URL;
//      pg.defaults.ssl = true;
//  } else {
//      connectionString = 'postgres://localhost:5432/mysite';
//  }
//  console.log("connectionString set to: ", connectionString);
//
// app.use(bodyParser.json());
// app.use('/', router);

app.set("port", (process.env.PORT || 8080));

app.get("/*", function( req, res ){
    console.log("this is req.params: ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    console.log(file);
    res.sendFile(path.join(__dirname, "./public", file));
});

// General set up //
app.listen(app.get("port"), function(){
      console.log("Listening on port: ", app.get("port"));
  });

module.exports=app;
