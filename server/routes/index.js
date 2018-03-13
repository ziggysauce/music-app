const express = require('express');
const router = express.Router();

const userRouter  = require('./userRoute');
const fbRouter  = require('./fbRoute');

router.use('/', userRouter);
router.use('/auth', fbRouter);

module.exports = router;