const express = require('express');
const router = express.Router();

const { getUsers, getPagesAmount, getUserById } = require('../model/users');

router.get('/', (req, res) => {
  const { limit, page } = req.query;

  if (!limit || !page) {
    res.json({ message: 'Should send limit and page query params' });
  }

  const pagesPromise = getPagesAmount({ limit });
  const usersPromise = getUsers({ page, limit });

  Promise.all([pagesPromise, usersPromise]).then(([pages, users]) =>
    res.json({
      pages,
      users,
    })
  );
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  getUserById(id).then((user) => res.json(user));
});

module.exports = router;
