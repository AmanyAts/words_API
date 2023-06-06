// import {listWords,
//     getWord,
//     addWord} from "../Controller/words.controller.js"

const express = require('express');

const router = express.Router()
const bodyParser = require('body-parser')


module.exports = router;

const {getWord , listWords , addWord} = require("../Controller/words.controller")
console.log('hhhheeelllooo')
// console.log(controller.getWord)
router.get("/", listWords);

router.get("/:id", getWord);

// router.put("/:id", editPet);

router.post("/",bodyParser.json(), addWord);

// router.delete("/:id", deletePet);

// export default router;