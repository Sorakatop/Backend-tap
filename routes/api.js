const router = require('express').Router();
//go to the api/game
const gameRouter = require('./api/game');


router.use('/games', gameRouter);


module.exports = router