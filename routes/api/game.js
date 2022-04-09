const {createStates, showGames, createGame ,deleteGame,updateGame, showGame} = require('../../controllers/apiController');
const router = require('express').Router();
//see games
router.get('/',showGames)
//game
router.get('/:id',showGame)
//create game
router.post('/',createGame)
//delete game
router.delete('/:id',deleteGame)
//update game
router.put('/:id',updateGame)


//
router.post('/states',createStates)
module.exports = router