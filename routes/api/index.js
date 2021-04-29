const router = require('express').Router();
const quotesRouter = require('./quotes');

router.use('/quotes', quotesRouter);

module.exports = router;
