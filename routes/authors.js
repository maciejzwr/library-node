const express = require('express')
const router = express.Router()


//all authors route
router.get('/', (req, res) => {
   res.render('authors/index')
})


//new authors route

router.get('/new', (req, res) => {
    res.render('authors/new')
})


//create authors route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router