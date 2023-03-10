const Router=require('express');
const router=new Router();
const deviceRouter=require('./deviceRouter');
const userRouter=require('./userRouter');
const brandRouter=require('./brandRouter');
const typeRouter=require('./typeRouter');
const basketRouter=require('./basketRouter');
const bayRouter=require('./bayRouter');

router.use('/bay',bayRouter);
router.use('/basket',basketRouter);
router.use('/user',userRouter);
router.use('/type',typeRouter);
router.use('/brand',brandRouter);
router.use('/device',deviceRouter);

module.exports=router;

