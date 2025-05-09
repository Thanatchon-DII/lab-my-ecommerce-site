var http = require('http');

http.createServer(function (req, res) {
    // res.setHeader('Acces-Control-Allow-Origin', '*');               //ใส่อันเดียวก็ได้ แต่เราจะใส่หมดเลยทั้ง 3 บรรทัด
    // res.setHeader('Acces-Control-Allow-Methods', 'GET,POS');
    // res.setHeader('Acces-Control-Allow-Headers', 'Content-Type');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"contactSubject": ["General Enquery","Classes","Schedules","Instructors","Prices","Other","Chimon"]}');
}).listen(5000);
