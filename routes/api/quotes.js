const express = require('express');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { getDb } = require('../../mongodb');
router.get(
	'/all',
	asyncHandler(async (req, res) => {
		const db = getDb();

		const data = await db
			.collection('quotes')
			.find({}, { projection: { _id: 0 } })
			.toArray();
		return res.json(data);
	})
);

module.exports = router;
