const {   Router  } = require('express');
const { check } = require('express-validator');
const { createGrandfather, getAllGrandfathers } = require('../controllers/grandfathers.controller');

const router = Router()

router.post('/', [
    check('code').isLength({min: 10}),
], createGrandfather)

router.get('/', getAllGrandfathers);


module.exports = router