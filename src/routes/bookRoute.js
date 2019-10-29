const express = require('express')
const router = express.Router()
const controllerBooks = require('../controllers/bookController')

router.get('/', controllerBooks.get) 
router.get('/users', controllerBooks.getByName)
router.get('/Books', controllerBooks.getByBooks)
router.get('/:id', controllerBooks.getById)
router.get('/OneBook', controllerBooks.getBooks)

module.exports = router