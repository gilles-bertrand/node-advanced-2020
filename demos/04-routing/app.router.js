const express = require('express')
const router = express.Router();
const pageController = require('./controllers/page');


router.get('/',pageController.index);
router.get('/index',pageController.index);
router.get('/about',pageController.about);
/**
 * router.get('/users')
 * router.post('/users')
 * 
 * router
 * .route('/users')
 * .get(UsersController.index)
 * .post(UsersController.create)
 */

module.exports = router;