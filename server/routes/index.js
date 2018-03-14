const express = require('express');
const router = express.Router();

const userRouter  = require('./userRoute');
const fbRouter  = require('./fbRoute');
const googleRouter  = require('./googleRoute');
const twitterRouter  = require('./twitterRoute');
const connectAuthRouter  = require('./connectAuthRoute');

router.use('/', userRouter);
router.use('/auth', fbRouter);
router.use('/auth', googleRouter);
router.use('/auth', twitterRouter);
router.use('/connect', connectAuthRouter);

module.exports = router;