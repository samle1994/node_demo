const express = require('express')
const router = express.Router()
const { getHomePage,getTest } = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/test', getTest);

module.exports = router