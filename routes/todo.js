const router = require('express').Router();

const todosCtrl = require('../controllers/todos')

router.get('/', todosCtrl.index)
router.post('/', todosCtrl.create)
router.get('/:id', todosCtrl.show)
router.put('/:id', todosCtrl.update)
router.delete('/:id', todosCtrl.delete)

module.exports = router


