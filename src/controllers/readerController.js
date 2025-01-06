const readerService = require('../services/readerService');

const getAllReaders = async (req, res) => {
    const readers = await readerService.getAllReaders();
    res.json(readers);
};

const createReader = async (req, res) => {
    const { name, email } = req.body;
    const newReader = await readerService.createReader(name, email);
    res.status(201).json(newReader);
};

const getReaderBooks = async (req, res) => {
    const { id } = req.params;
    const books = await readerService.getReaderBooks(parseInt(id));
    res.json(books);
};

const assignBookToReader = async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const updatedReader = await readerService.assignBookToReader(parseInt(id), title, author);
    res.json(updatedReader);
};

module.exports = {
    getAllReaders,
    createReader,
    getReaderBooks,
    assignBookToReader,
};
