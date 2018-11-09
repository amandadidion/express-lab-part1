const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send([
        {id: "food",
        product: "pizza",
        price: "15",
        quantity: "5"}]);
});

router.post('/', (req, res) => {
    if(req.body){
        res.status(201).send(req.body);
    } else {
        res.sendStatus(400);
    }
});

router.put('/:id', (req, res) => {
    res.send(`updated shopping list: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`deleted shopping list: ${req.params.id}`);
});


module.exports = router;