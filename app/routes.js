var express = require('express');
var router = express.Router();
var fs = require('fs');
var path  = require ('path');0
var mng = require ('mongodb');
var url = 'mongodb://localhost:27017/';
var bodyParser = require('body-parser');
 router.use(bodyParser.urlencoded({'extended':'true'}));            
    router.use(bodyParser.json());   

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
//   })

router.get('/', function (req,res) {
	
	res.sendFile(path.resolve('./public/views/index.html'));
});


router.post("/createUser", function (req, res) {
  var found =true;
  // console.log(req.body);
  mng.connect(url, function (err, db) {

    if(err) throw err;
  
    var data = db.db("cdac");
    
    data.collection("lol").find({$or :[{email:req.body.email},{mobile:req.body.mobile}]}).toArray(function (err,result) {
      if (err) throw err;
  // console.log("**********************************");
      if(result.length<=0) {
        found =false;
        
        data.collection("lol").insert(req.body, function (err,result) {
          if (err) throw err;
          console.log("Inserted");
          res.send(result[0]);
        });
      }

      else {
        found = true;
        console.log("found");
        res.send(result[0]);
      }

     
  
    });
     
     
      
  });
   
});
  
  module.exports = router;