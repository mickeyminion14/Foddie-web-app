var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var mng = require('mongodb');
var url = 'mongodb://sarthak:12345noni@ds121382.mlab.com:21382/foodie';
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

router.use(bodyParser.urlencoded({
  'extended': 'true'
}));
router.use(bodyParser.json());
router.use(fileUpload());


router.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/views/index.html'));
});


router.post("/createUser", function (req, res) {
  console.log(req.body);
  var found = true;
  let profile_image;
  if (!req.files) {
    profile_image = "null";
  } else {
    profile_image = req.files.profile_image;
  }
  // let profile_image = req.files.profile_image;
  // if (!req.files)
  // {

  //   console.log("server crash 500");
  //   return res.send('No files were uploaded.');
  // }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

  // if(profile_image === undefined) 
  //   return res.json( { error: true, mssg: 'Invalid Request' } )
  console.log(req.files.profile_image);
  console.log(profile_image);

  mng.connect(url, {
    uri_decode_auth: true
  }, function (err, db) {

    if (err) throw err;

    var data = db.db("foodie");

    data.collection("lol").find({
      $or: [{
        email: req.body.email
      }, {
        mobile: req.body.mobile
      }]
    }).toArray(function (err, result) {
      if (err) throw err;
      // console.log("**********************************");
      if (result.length <= 0) {
        found = false;
        console.log(result + "angel");

        // Use the mv() method to place the file somewhere on your server
        if (profile_image == null) {
          console.log("no files were uploaded");
        } else {
          profile_image.mv('./public/media/' + req.body.email.split("@")[0], function (err) {
            if (err)
              return res.json({
                error: true,
                mssg: err
              });

          });
        }
        data.collection("lol").insert(req.body, function (err, result) {
          if (err) throw err;
          console.log("Inserted");
          console.log(result.result.ok);
          res.json({
            error: false,
            mssg: result.result
          });
        });

      } else {
        // found = true;
        // console.log("found");
        // result[0].ok=0;
        // console.log(result[0]);
        // res.send(result[0]);

        res.json({
          error: true,
          mssg: result[0]
        });
      }
    });
  });
});

router.post("/validateLogin", function (req, res) {
  console.log(req.body);

  mng.connect(url, {
    uri_decode_auth: true
  }, function (err, db) {

    if (err) throw err;

    var data = db.db("foodie");

    data.collection("lol").find({
      email: req.body.email
    }).toArray(function (err, result) {
      if (err) throw err;

      if (result.length > 0 && result[0].password == req.body.password) {
        console.log("record found");
        console.log(result[0]);
        result[0].ok = 1;
        res.send(result[0]);

      } else {
        console.log("not found");
        console.log(result);
        var result1 = {
          ok: 0
        };
        res.send(result1);
      }
    });
  });
});

router.post("/processOrder", function (req, res) {
  console.log(req.body.user.email);

  mng.connect(url, {
    uri_decode_auth: true
  }, function (err, db) {

    if (err) throw err;

    var data = db.db("foodie");

    data.collection("lol").updateOne({email : req.body.user.email},{$push: { past_orders: req.body.cartObj }}, function(err, result) {
      if(err) {
        throw err;
      }

      else {
        console.log("added to past orders");
        res.json({
          added : true
        });
      }
    })
  });

 
});

module.exports = router;