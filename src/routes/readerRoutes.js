const express = require('express');
const router = express.Router();
const readerController = require('../controllers/readerController');

router.get('/', readerController.getAllReaders);
router.post('/', readerController.createReader);
router.get('/:id/books', readerController.getReaderBooks);
router.post('/:id/books', readerController.assignBookToReader);

module.exports = router;
