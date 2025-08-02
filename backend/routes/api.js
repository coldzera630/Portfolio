// /backend/routes/api.js

const router = require('express').Router();
let Message = require('../models/message.model');
let Project = require('../models/project.model');

// --- Contact Form Route ---
router.route('/contact').post((req, res) => {
    const { name, email, subject, message } = req.body;

    const newMessage = new Message({
        name,
        email,
        subject,
        message,
    });

    newMessage.save()
        .then(() => res.json({ message: 'Message sent successfully!' }))
        .catch(err => res.status(400).json({ error: 'Error: ' + err }));
});

// --- Projects Route ---
router.route('/projects').get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json({ error: 'Error: ' + err }));
});

module.exports = router;