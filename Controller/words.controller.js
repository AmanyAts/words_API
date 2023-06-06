// import { getItem, listItems, editItem, addItem, deleteItem } from '../models/pets.models.js'
const Model = require('../model/words.model')

getWord = async (req, res) => {
    try {
        
        // const resp = model.getItem(parseInt(req.params.id))
        // res.status(200).json(resp)
        const data = await Model.findById(req.params.id);
        res.json(data)

    } catch (err) {
        res.status(500).send(err)
    }
}
listWords = async (req, res) => {
    try {
        // const resp = model.listItems()
        const data = await Model.find();
        res.json(data)

    } catch (err) {
        res.status(500).send(err)
    }
}



addWord = async (req, res) => {
    // const resp = model.addItem(req.body)
    // console.log(json(req.body))

    try {

        const Word = new Model({
            word: req.body.word,
            category: req.body.category
        })

        const dataToSave = await Word.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


module.exports = {
    getWord, listWords, addWord
};

