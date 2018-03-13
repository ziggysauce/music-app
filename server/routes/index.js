const express = require('express');
const router = express.Router();

const userRouter  = require('./userRoute');
const fbRouter  = require('./fbRoute');
const googleRouter  = require('./googleRoute');

router.use('/', userRouter);
router.use('/auth', fbRouter);
router.use('/auth', googleRouter);

module.exports = router;