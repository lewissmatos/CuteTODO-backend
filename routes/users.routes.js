const {   Router  } = require('express');
const { check } = require('express-validator');
const { createUser, getAllUsers } = require('../controllers/user.controller');

const router = Router()

router.post('/', [
    check('pass').isLength({min: 8})
], createUser);

router.get('/', getAllUsers);

module.exports = router