const express = require('express');
const router = express.Router();

const userRouter  = require('./user/userRoute');
const fbRouter  = require('./user/fbRoute');
const googleRouter  = require('./user/googleRoute');
const twitterRouter  = require('./user/twitterRoute');
const connectAuthRouter  = require('./user/connectAuthRoute');

router.use('/', userRouter);
router.use('/auth', fbRouter);
router.use('/auth', googleRouter);
router.use('/auth', twitterRouter);
router.use('/connect', connectAuthRouter);

module.exports = router;