const {service} = require ('../models')

const getAllservice = async (req , res , next) =>{
    try {
        const services = await service.findAll();
        if(!service){
            throw new Error("No service found");
        }
     res.status(200).json({services,});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
}
const createservice = async (req , res, next) => {
    const {nom,type,description,contact}=req.body
    try {
        const  newservice = await service.create({nom,type,description,contact})
        return  res.status(201).json({message: "succées de creation", newservice})


    }catch (error){
        res.status(500).json({"error":error.message})
    }

  
}

module.exports = {getAllservice,createservice}
