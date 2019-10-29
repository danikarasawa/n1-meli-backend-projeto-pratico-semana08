const books = require('../model/books.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(books)
}

