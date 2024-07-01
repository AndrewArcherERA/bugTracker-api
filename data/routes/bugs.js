const express = require("express");
const router = express.Router();
const model = require("../models/bug");

// Gets all bugs
router.get("/", async (req, res) => {
    try {
        const bugs = await model.getAllBugs();
        res.json(bugs);
    } catch (err) {
        res.send(err);
    }
});

// Get bug by id
router.get("/:id", async (req, res) => {
    try {
        const bug = await model.getBugById(req.params.id);
        if (bug.length === 0) {
            res.status(404).send("Bug with given ID is not found.");
            return;
        }
        res.json(bug);
    } catch (err) {
        res.send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const descr = req.body.descr;
        if (!descr) {
            res.status(400).send("A description is required");
            return;
        }
        const newBug = await model.postNewBug(descr);
        res.json(newBug);
    } catch (err) {
        res.send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const descr = req.body.descr;
        if (!descr) {
            res.status(400).send("A description is required");
            return;
        }
        await model.updateBug(req.params.id, descr);
        res.json({ b_id: req.params.id, descr: descr });
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
