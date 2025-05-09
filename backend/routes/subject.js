const express = require('express');
const router = express.Router();


const subject = '{contactSubject: ["General Enquiry","Classes","Schedules","Instructors","Prices","Other"]}';
// const subject_txt = require('../data/04_contact_subject.json');

router.get('/', (req, res) => {
    res.end(subject);
    // res.json(subject_txt);
})

module.exports = router;