const {Router}=require('express');
const router=Router();
const {MonitoresController}=require('./controller')
const multer=require('multer');
const path = require('path');


const diskstorage=multer.diskStorage({
    destination:path.join(__dirname, '../../assets'),
    filename: (req, file, cb) =>{
        cb(null, Date.now()+file.originalname)
    }
});

const fileUpload = multer({
    storage:diskstorage
}).single('image');


router.get('/',MonitoresController.getAll);
router.get('/:id',MonitoresController.getById);
router.put('/:id/images',fileUpload,MonitoresController.savedImage);
router.post('/',MonitoresController.create);
router.delete('/:id',MonitoresController.delete);
router.put('/:id',MonitoresController.update);


module.exports = router