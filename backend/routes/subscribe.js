const express = require('express');
const router = express.Router();

/*
1. reasd File Json 
2. fetch into Array
3. Add New Data into Array
4. write back to Json File
*/

const fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
    const { email } = req.body;
    const subscribe = { subscribeAt: new Date(), email };

    const filePath = path.join(__dirname, '..', '.data', '/subscribe.json');

    // Step 1 and 2: Read file and parse it
    if (fs.existsSync(filePath)) {
        let data = fs.readFileSync(filePath, 'utf-8');
        try {
            subscribes = JSON.parse(data);
        } catch (e) {
            console.error("JSON parse error:", e);
            subscribes = [];  // fallback to empty
        }
    }

    // Step 3: Add new entry
    subscribes.push(subscribe);

    // Step 4: Write back to file
    try {
        fs.writeFileSync(filePath, JSON.stringify(subscribes, null, 2));
        console.log("Content from submitted:", { email });
        res.status(200).json({ message: 'Email Received', subscribes });
    } catch (err) {
        console.error("Write error:", err);
        res.status(500).json({ message: 'Failed to save data.' });
    }

    // console.log("Content from summited", { email });
    // res.status(200).json({ message: 'Email Received' });
})

module.exports = router;

