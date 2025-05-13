// API Service
// ทำตัวเองเป็น Service นะอันที่ root เป้น webserver
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());       // มันจะเฟดลิงต์หรือค่าที่ส่งมา มันจะเป็นไว้ให้เลย แล้วเราก็เอาใช้งานต่อได้เลย 
app.use(express.urlencoded({ extended: true }))

app.use('/api/subject', require('./routes/subject.js'));
app.use('/api/contract', require('./routes/contract.js'));
app.use('/api/subscribe', require('./routes/subscribe.js'));


app.listen(PORT, () => {
    console.log(`Server running AT : http://localhost:${PORT}/api/subject`);  // OR + PORT
});