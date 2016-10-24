var express=require('express');  // sets up express
var app=express();
var path=require('path');  // sets up paths
var bodyParser=require('body-parser');  // sets up body-parser for POST method (for admin user feature stretch goal)
var urlencodedParser=bodyParser.urlencoded( {extended: false} );
var pg=require('pg');  // sets up postgres database

var connectionString = '';

 if(process.env.DATABASE_URL !== undefined) {
     console.log('env connection string');
     connectionString = process.env.DATABASE_URL;
     pg.defaults.ssl = true;
 } else {
     connectionString = 'postgres://localhost:5432/mysite';
 }
 console.log("connectionString set to: ", connectionString);

app.use(bodyParser.json());

//  set basic url
app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});

// app.get("/*", function(req,res){
//     console.log(req.params[0]);
//     var file = req.params[0] || "/views/index.html";
//     res.sendFile(__dirname, "/public", file);
// });



// app.get( '/art', function( req, res ){  // makes art.html available
//   res.sendFile( path.resolve( 'views/art.html' ) );
//   });
//
// app.get( '/travel', function( req, res ){  // makes travel.html available
//     res.sendFile( path.resolve( 'views/travel.html' ) );
//     });
//
// app.get( '/naturephotos', function( req, res ){  // makes naturephotos.html available
//     res.sendFile( path.resolve( 'views/naturephotos.html' ) );
//     });
//
// app.get( '/diy', function( req, res ){  // makes diy.html available
//       res.sendFile( path.resolve( 'views/diy.html' ) );
//       });
//
// app.get( '/cats', function( req, res ){  // makes cats.html available
//         res.sendFile( path.resolve( 'views/cats.html' ) );
//         });
//
// app.get( '/blog', function( req, res ){  // makes blog.html available
//   res.sendFile( path.resolve( 'views/blog.html' ) );
//   });



// General set up //
app.set("port", (process.env.PORT || 8080));

app.listen(app.get("port"), function(){
      console.log("Listening on port: ", app.get("port"));
  });

app.use(express.static('public'));

module.exports=app;
