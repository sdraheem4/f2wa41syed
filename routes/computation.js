var express = require('express');

var router = express.Router();

var x = Math.random();

var y = Math.random();



var val1="Math.log(x) applied to "+ x + " is "+ Math.log(x)

var val2="Math.imul(x, y) applied to "+ x +"and"+ y +" is "+ Math.imul(x, y)

var val3= "Math.log10(x) applied to "+ x + " is "+ Math.log10(x);



/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('computation', { title:'ABDUL RAHEEM SYED   ',value1: val1, value2:val2, value3:val3 });

});



module.exports = router;