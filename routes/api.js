// /api/books (get) - Should return all saved books as JSON.
// /api/books (post) - Will be used to save a new book to the database.
// /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.

const router = require('express').Router();
const booksController = require('../controllers/booksController');

router.route('/')
.get(booksController.findAll)
.post(booksController.create);

router.route('/:id')
.delete(booksController.remove);

module.exports = router;
