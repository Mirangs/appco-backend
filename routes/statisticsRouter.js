const express = require('express');
const router = express.Router();

const { getLastWeekStatisticsByUser } = require('../model/statistics');

router.get('/:id', (req, res) => {
  const { id } = req.params;
  getLastWeekStatisticsByUser(id).then((data) => res.json(data));
});

module.exports = router;
