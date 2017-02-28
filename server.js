var https = require('http');
var router = require('./app/router.js')
var utils = require('./app/utils.js')

https.createServer((req,res) => {
  var path = req.method+' '+req.url

  try{
    router[path](req,res);
  }catch(err){
    console.log('ERROR :'+err);
    res.end('ERROR OCCURED')
  }
}).listen(process.env.PORT || 8077,() => {
  console.log('Listening on 8080');
});
