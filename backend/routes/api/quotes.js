const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { getDb } = require('../../mongodb');

//get array of all quotes
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

//get a single random quote
router.get(
	'/random',
	asyncHandler(async (req, res) => {
		const db = getDb();

		const data = await db
			.collection('quotes')
			.aggregate([{ $sample: { size: 1 } }, { $project: { _id: 0 } }])
			.toArray((err, result) => {
				if (err) res.send({ error: err.message });
				if (result.length) return res.json(result[0]);
				return res.send({ data: 'No docs found' });
			});
	})
);

module.exports = router;
