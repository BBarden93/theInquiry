const
	express = require('express'),
	usersRouter = new express.Router(),
	questionsCtrl = require('../controllers/questions.js'),
	verifyToken = require('../serverAuth.js').verifyToken

questionsRouter.route('/')
	.get(questionsCtrl.index)
	.post(questionsCtrl.create)

questionsRouter.post('/authenticate', questionsCtrl.authenticate)

questionsRouter.use(verifyToken)
questionsRouter.route('/:id')
	.get(questionsCtrl.show)
	.patch(questionsCtrl.update)
	.delete(questionsCtrl.destroy)

module.exports = questionsRouter