var express=require('express');  // sets up express
var app=express();
var router = express.Router();
var path=require('path');  // sets up paths
// var bodyParser=require('body-parser');
// var urlencodedParser=bodyParser.urlencoded( {extended: false} );
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

// app.use(bodyParser.json());
app.use('/', router);

app.set("port", (process.env.PORT || 8080));

app.get("/*", function( req, res ){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

var italySlides;
var slides;
var rows;

router.get('/getItalySlides', function(req, res) {  // pull selected images and text from database
    console.log("in app.get select Italy Slides");
    italySlides = [];  // resets array to empty for new search
    pg.connect(connectionString, function(err, client, done) {  // connecting to database
      if (err) {     // check for errors
      console.log(err);
      } else { // start selection criteria
          slides=client.query("SELECT * FROM photography WHERE place = 'Florence' OR place = 'Rome' OR place = 'Siena' ORDER BY id DESC");  // getting slides from photography table
          rows = 0;
          slides.on('row', function(row) {  // pushing to array
            italySlides.push(row);
          });  // end query push
          slides.on('end', function() {  // sending to scripts
            console.log("end function in Italy slides from app.get in app");
            return res.json(italySlides);
          }); // end slides.on function
          done(); // signals done
      } // end else (for success)
    }); // end pg connect function
}); // end app.get /select function



// router.get( '/eventPopulate', function( req, res ) {
//   var activeEvents = [];
//   pg.connect( connectionString, function( err, client, done ) {
//     var query = client.query( "SELECT * FROM events WHERE active = TRUE ORDER BY begin_date ASC" );
//     if( err ) {
//       console.log( "Unable to retrieve event info." );
//     } else {
//     query.on( 'row', function( row ) {
//       activeEvents.push( row );
//     });
//     query.on( 'end', function() {
//       return res.json( activeEvents );
//     });
//     done();
//   }
//   });
// });







// General set up //
app.listen(app.get("port"), function(){
      console.log("Listening on port: ", app.get("port"));
  });

module.exports=app;
