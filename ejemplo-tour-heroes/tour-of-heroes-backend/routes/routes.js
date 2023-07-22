const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post Method
router.post('/heroes', async (req, res) => {
    const data = new Model({
        id: req.body.id,
        name: req.body.name
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/heroes', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/heroes/:id', async (req, res) => {
    try {
        const query = { id: req.params.id };
        //const data = await Model.findById(req.params.id);
        const data = await Model.findOne(query);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.put('/heroes/:id', async (req, res) => {
    try {
        const query = { id: req.params.id };
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        /*const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )*/

        const result = await Model.findOneAndUpdate(
            query, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/heroes/:id', async (req, res) => {
    try {
        const query = { id: req.params.id };
        const id = req.params.id;
        //const data = await Model.findByIdAndDelete(id)
        const result = await Model.findOneAndDelete(query)
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;