const Router=require('express');
const router=new Router();
const basketDeviceController=require('../controllers/basketDeviceController');
const authMiddleware=require('../middleware/authMiddleware');

router.post('/',authMiddleware,basketDeviceController.add);
router.delete('/delall',authMiddleware,basketDeviceController.delAll);
router.delete('/:id',authMiddleware,basketDeviceController.del);

module.exports=router;


