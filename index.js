const express = require('express')
const app = express()
let cors = require('cors')
const port = process.env.port || 5000;
const chefs = require('./data/chefs.json');
const store = require('./data/store.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello From Master Chef Burger Server!')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const oneChef = chefs.find(chef => chef.id == id);
    res.send(oneChef);
})

app.get('/store', (req, res) => {
    res.send(store);
})

app.listen(port, () => {
    console.log(`Master Chef Server Running on server ${port}`)
})