const router = require('express').Router();

const Tasks = require('../helpers/tasksModel');

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


module.exports = router;