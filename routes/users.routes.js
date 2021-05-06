const {   Router  } = require('express');
const { check } = require('express-validator');
const { createUser, getAllUsers } = require('../controllers/user.controller');
const { userExists } = require('../middlewares/validateUser.mdw');
const {validations}=require('../middlewares/validations')
const router = Router()

router.post('/', [
    check('pass').isLength({min: 8}),
    check('userName').custom(userExists),
    validations
], createUser);


router.get('/', getAllUsers);

module.exports = router