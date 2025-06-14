const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

var server = http.createServer(function (req, res) {
  // var q = url.parse(req.ur, true); // เเพ่ิม
  var filePath = "." + req.url;
  if (filePath === "./") filePath = "./index.html";

  const extname = path.extname(filePath);
  let contentType = "text/html";
  if (extname === ".css") contentType = "text/css";
  if (extname === ".xml") contentType = "text/xml";


  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 File Not Found !!!")
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.write(data);
    return res.end();
  });
})

server.listen(4000);
console.log(`Server running AT : http://localhost:4000  `);  // OR + PORT