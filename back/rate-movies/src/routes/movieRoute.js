const MovieController = require('../controllers/movies');

module.exports = (app) => {
    app.post('/movies', MovieController.post);
    app.put('/movies/:id', MovieController.put);
    app.delete('/movies/:id', MovieController.delete);
    app.get('/movies', MovieController.get);
    app.get('/movies/:id', MovieController.getById);
}