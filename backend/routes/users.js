const express = require('express');
const router = express.Router();
const userSerice = require('../service/userService');



router.post('/register', (req, res) => {
    const response = userSerice.register(req.body);
})

router.post('/login', (req, res) => {
    const response = userSerice.login(req.body);
})

module.exports = router;


//เรามอง User ทำอะไรได้บ้างแล้ว >> เข้าไปใน userService >>> ไปหา Service(function) ว่ามันควรจะมีอะไรบ้างเราก็ Imprement ได้เลย