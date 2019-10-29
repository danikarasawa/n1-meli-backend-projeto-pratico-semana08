const book = require('../model/books.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send("Hello World")
}

exports.getByName = (req, res) => {
    console.log(req.url)
    res.status(200).send(book)
}

exports.getById = (req, res) => {
    const id = req.params.id

    if (id > 4 || id <= 0) {
        res.send("Ai ai ai... ID inválido!")
    }

    res.status(200).send(book.find(item => item.id == id))
}

exports.getByBooks = (req, res) => {
    const listaLivros = book.map(item => item.livro)
    res.status(200).send(listaLivros)
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const name = book.find(item => item.id == id)
    if (!name) { 
        res.send("Amiga, o que está errado, não está certo")
    }
    const livroName = name.livro
    const livros = livroName.map(item => item.livro)
    res.status(200).send(livros)
}