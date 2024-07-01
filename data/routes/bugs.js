const express = require('express');
const router = express.Router();
const model = require('../models/bug')

// Gets all bugs
router.get('/', async (req, res) => {
    try{
        const bugs = await model.getAllBugs();
        res.json(bugs)
    }catch (err) {
        res.send(err);
    }
})

// Get bug by id
router.get('/:id', async (req, res) => {
    try {
        const bug =  await model.getBugById(req.params.id);
        if(bug.length === 0){
            res.status(404).send('Bug with given ID is not found.');
            return
        } 
        res.json(bug)
    }catch (err) {
        res.send(err);
    }
})

module.exports = router;
