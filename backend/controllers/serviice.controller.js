const {serviice} = require ('../models')

const getAllserviice = async (req , res , next) =>{
    try {
        const serviices = await serviice.findAll();
        if(!serviice){
            throw new Error("No serviice found");
        }
     res.status(200).json({serviices,});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
}
const createserviice = async (req , res, next) => {
    const {nom,type,description,contact}=req.body
    try
    {
        const  newserviice = await serviice.create({nom,type,description,contact})
        return  res.status(201).json({message: "succées de creation", newserviice})


    }catch (error){
        res.status(500).json({"error":error.message})
    }


}

module.exports = {getAllserviice,createserviice}
