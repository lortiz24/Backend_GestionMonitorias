const {Router}=require('express');
const router=Router();
const {MonitoriasController}=require('./controller')

router.get('/',MonitoriasController.getAll);
router.get('/:id',MonitoriasController.getById);
router.post('/',MonitoriasController.create);
router.delete('/:id',MonitoriasController.delete);
router.put('/:id',MonitoriasController.update);


module.exports = router