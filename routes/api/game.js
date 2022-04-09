const {createStates, showGames, createGame ,deleteGame,updateGame} = require('../../controllers/apiController');
const router = require('express').Router();
//enruote to /api/game
router.get('/',showGames)
//create game
router.post('/',createGame)
//delete game
router.delete('/:id',deleteGame)
//update game
router.put('/:id',updateGame)


//
router.post('/states',createStates)
module.exports = router