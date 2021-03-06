const
	express = require('express'),
	questionsRouter = new express.Router(),
	questionsCtrl = require('../controllers/questions.js'),
	verifyToken = require('../serverAuth.js').verifyToken

questionsRouter.route('/')
	.get(questionsCtrl.index)
	.post(verifyToken, questionsCtrl.create)

questionsRouter.post('/authenticate', questionsCtrl.authenticate)

questionsRouter.use(verifyToken)
questionsRouter.route('/:id')
	.get(questionsCtrl.show)
	// .patch(usersCtrl.update)
	.delete(questionsCtrl.destroy)

questionsRouter.route('/:id/answers')
	.post(questionsCtrl.addAnswer)

module.exports = questionsRouter