const express = require('express');
const LikeController = require('../controllers/LikeController');

const router = express.Router();

router.get('/test', LikeController.TestLikeFunction);
router.post('/ingredient', LikeController.Like);

module.exports = router;
