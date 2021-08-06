const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

router.post('/signup', usersCtrl.create);
router.post('/login', usersCtrl.login);

router.delete('/', usersCtrl.delete);

router.put('/profileUpdate', usersCtrl.update);
module.exports = router;
router.get('/', usersCtrl.index);

