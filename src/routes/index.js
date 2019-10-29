const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
    response.status(200).send({
        title: 'Reprograma Turma MELI',  
        version: '0.0.1',
        status: 'Hello World~'
    })
})

module.exports = router



