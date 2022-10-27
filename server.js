const express = require('express');
require('dotenv').config();
// const cookieParse = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const app = express();
const cors = require('cors');
// const passport = require('passport');
const session = require('express-session');
const fs = require('fs');
//const nroute = require('./server/config/routes');
//This is required ALWAYS on the top
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//​ gzip
const compression = require('compression')
app.use(compression())
//create server
var server = https.createServer({
     key: fs.readFileSync('key_msac.pem'),
     cert: fs.readFileSync('cert_msac.cert'),
 }, app);

//var server = https.createServer(app);
//  init passport
//  console.info("[app] init passport ");
//  app.use(passport.initialize());
//  app.use(passport.session());
//  init session
 console.info("[app] init session ");
 app.use(session({
     secret: "MSAC",
     name: "session",
     resave: false,
     saveUninitialized: false
 }));
 //var port = "62054";
 var date = new Date();
 var hours = date.getHours();
 var minutes = date.getMinutes();
 var auxMinutes = "";
 var auxHours = "";
 if(minutes < 10){
     auxMinutes = "0" + minutes;
 }else{
     auxMinutes = minutes + "";
 }
 if(hours < 10){
    auxHours = "0" + hours;
}else{
    auxHours = hours + "";
}
 var current_hour = auxHours + ':' + auxMinutes;
/*Uncomment this to bluemix on localhost*/
// /*********************************************************************************/
  /*app.set('port', process.env.PORT || 4000);
​
 server = app.listen(app.get('port'), function() {
   console.log('[app] Express server listening on port ' + server.address()+process.env.PORT);
 	console.log("[app] Running Starter kit is running at " + process.env.PORT + ', started at: ' + current_hour + ' hrs');
 });*/
/*********************************************************************************/
 server.listen( 51235, () => console.log('Running Safe Move on PORT: ' + 51235 + ', started at: ' + current_hour + ' hrs' ) );
 console.log("https://localhost:51235");
//file for interacting with auth
// app.use(require('./server/config/passport'));
//routes
//app.use('',nroute);
//angular dis output folder
//production ng build
app.use(express.static(path.join(__dirname,'dist/safe-move')));
//app.use(express.static(path.join(__dirname,'src')));
//send all other request to angular app
app.get('*',(req, res) =>{
//   res.sendFile(path.join(__dirname,'./dist/index.html'))
res.sendFile(path.join(__dirname,'dist/safe-move/index.html'))
  //res.sendFile(path.join(__dirname,'./src/index.html'))
});
app.use(function(req,res,next){
 res.header('Access-Control-Allow-Origin', "*");
 res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Content-Type', 'application/json');
 next();
});
