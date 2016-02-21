var express = require('express');
var router = express.Router();
var multer = require('multer');
var uploading = multer({
    dest: __dirname + '../../public/uploads',
    limits: {
        fileSize:1000000,
        files:1
    }
});
var fs = require('fs');

/* GET home page. */
router.post('/upload',uploading.single('file'), function(req, res) {
    res.send(JSON.stringify({fileSize:req.file.size}));
    fs.unlink(req.file.path, function(err) {
        if (err) throw err;
        console.log("Deleting... OK");
    })
});

module.exports = router;
