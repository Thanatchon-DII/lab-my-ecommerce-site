const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

var server = http.createServer(function (req, res) {

  // var q = url.parse(req.url, true)
  var filePath = ".." + req.url;                                             // อ้างอิงจาก root = ว่าเราต้อง .. เพื่อออกไปจาก D ที่เราเอยู่
  if (filePath === "../") filePath = "../index.html";                        // อาจจะต้องเป็ย ../ นะอันแรกอะ  **./index.html

  const extname = path.extname(filePath);
  let contentType = "text/html";
  if (extname === ".css") contentType = "text/css";


  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Chimon File Not Found !!!")
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.write(data);
    return res.end();
  });
})

server.listen(8080);

/*
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
*/