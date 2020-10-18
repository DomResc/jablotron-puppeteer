const EnableController = require('../controllers/enable.controller')
const EnableMiddleware = require('../middlewares/enable.middleware')

exports.routesConfig = function (app) {
  app.post('/enable', [
    EnableMiddleware.hasValidFields,
    EnableController.enable
  ])
}
