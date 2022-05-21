const {Router}=require('express');
const router=Router();
const {MonitoresController}=require('./controller')

router.get('/',MonitoresController.getAll);
router.get('/:id',MonitoresController.getById);
router.post('/',MonitoresController.create);
router.delete('/:id',MonitoresController.delete);
router.put('/:id',MonitoresController.update);


module.exports = router