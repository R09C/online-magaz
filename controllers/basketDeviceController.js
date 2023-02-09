const {BasketDevice}=require('../models/models');

class BasketController {
    async add(req,res) {
        const {device_id}=req.body;
        const user_id=req.user.id;
        const device=await BasketDevice.create({
            deviceId:device_id,
            basketId:user_id
        });
        return res.json(device);  
    }

    async delAll(req,res) {
        const user_id=req.user.id;
        await BasketDevice.destroy({where:{basketId:user_id}});
        
    }

    async del(req,res) {
        const{id}=req.params;
        const user_id=req.user.id;
        await BasketDevice.destroy({where:{basketId:user_id,id:id}});
        
    }

}

module.exports=new BasketController();
