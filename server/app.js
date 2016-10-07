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


app.get( '/', function( req, res ){    // set basic url
  res.sendFile( path.resolve( 'views/index.html' ) );
});

app.get( '/art', function( req, res ){  // makes view.html available
  res.sendFile( path.resolve( 'views/art.html' ) );
  });

app.get( '/travel', function( req, res ){  // makes view.html available
    res.sendFile( path.resolve( 'views/travel.html' ) );
    });

app.get( '/diy', function( req, res ){  // makes view.html available
      res.sendFile( path.resolve( 'views/diyprojects.html' ) );
      });

app.get( '/cats', function( req, res ){  // makes view.html available
        res.sendFile( path.resolve( 'views/cats.html' ) );
        });

app.get( '/blog', function( req, res ){  // makes view.html available
  res.sendFile( path.resolve( 'views/blog.html' ) );
  });

  app.set("port", (process.env.PORT || 8080));

  app.listen(app.get("port"), function(){
      console.log("Listening on port: ", app.get("port"));
  });
  app.use(express.static('public'));
