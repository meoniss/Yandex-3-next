// routes/games.js
const gamesRouter = require('express').Router(); // Создали роутер
const { sendAllGames, deleteGame, addGameController } = require('../controllers/games'); // Чтение и запись данных в JSON-файл
const { getAllGames } = require('../middlewares/games');

gamesRouter.post("/games", getAllGames, addGameController)
gamesRouter.get('/games', getAllGames, sendAllGames)
gamesRouter.delete('games/:id', getAllGames, deleteGame);

module.exports = gamesRouter;
