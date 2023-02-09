const {BasketDevice,Device}=require('../models/models');
const { Op } = require("sequelize");

class BayController {
    async apibank(req,res) {
        const {device_id}=req.body;
        
        return res.json(device);  
    }

    async bay(req,res) {
        const user_id=req.user.id;
        const devices=await BasketDevice.findAll({
            attributes: ['deviceId'],
            where:{basketId:user_id},
            raw:true
        });
        let mass=[];
        for(const item of devices){
            mass.push(item["deviceId"]);
        }
        const summ=await Device.sum('price',{
            where:{id:{[Op.in]:[1,2]}}

        });
        console.log(summ);
        // return res.send(summ);
        


        
    }

    async del(req,res) {
        const{id}=req.params;
        const user_id=req.user.id;
        await BasketDevice.destroy({where:{basketId:user_id,id:id}});
        
    }

}

module.exports=new BayController();
