const express = require('express');
const router = express.Router();

const { 
    signUp,
    login
} = require('../controllers/systemController');

router.route('/registration').post(signUp);
router.route('/login').post(login);

module.exports = router