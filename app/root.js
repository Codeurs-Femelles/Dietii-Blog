var fs = require('fs')
var main = fs.readFileSync(__dirname+'/../views/main.html','utf8')

module.exports = (req,res) => {
  res.end(main)
}
