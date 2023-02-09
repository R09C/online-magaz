const Router=require('express');
const router=new Router();
const bayController=require('../controllers/bayController');
const authMiddleware=require('../middleware/authMiddleware');

router.get('/',authMiddleware,bayController.bay);


module.exports=router;
